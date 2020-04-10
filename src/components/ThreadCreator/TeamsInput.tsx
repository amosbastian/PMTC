import React from "react";
import Select from "../Select";
import styled from "styled-components";
import { FastField, useFormikContext } from "formik";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { ThreadCreatorFormValues } from "./types";

const TeamsInputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
`;

interface TeamsInputProps {
  game: number;
}

interface TestQueryVariables {
  eventId: number;
}

const TEST_QUERY = gql`
  query anotherTestQuery($eventId: Int) {
    eventTeam(where: { eventId: { _eq: $eventId } }) {
      team {
        id
        name
      }
    }
  }
`;

const TeamsInput: React.FC<TeamsInputProps> = ({ game }) => {
  const { values } = useFormikContext<ThreadCreatorFormValues>();
  const { data, loading, error } = useQuery<any, TestQueryVariables>(TEST_QUERY, {
    skip: !values.event,
    variables: {
      eventId: values.event!,
    },
  });

  if (loading) return null;
  if (error) return <div>Error</div>;

  const options = data?.eventTeam.map(({ team }: any) => ({ label: team.name, value: team.id }));

  return (
    <TeamsInputSection>
      <FastField id="team1" name={`games[${game}].team1.name`} component={Select} label="Team 1" options={options} />
      <FastField id="team2" name={`games[${game}].team2.name`} component={Select} label="Team 2" options={options} />
    </TeamsInputSection>
  );
};

export default TeamsInput;
