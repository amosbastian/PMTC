import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import { Field, useFormikContext } from "formik";
import { TeamsInputTeamsData } from "./fragments";
import { ThreadCreatorFormValues } from "../types";

const TeamsInputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
`;

interface TeamsInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const TeamsInput: React.FC<TeamsInputProps> = ({ game, teams }) => {
  const { values } = useFormikContext<ThreadCreatorFormValues>();

  const team1Id = values.games[game].teams[0].team.id;
  const team2Id = values.games[game].teams[1].team.id;

  const teamOptions = teams
    .filter((team) => team.id !== team1Id && team.id !== team2Id)
    .map((team) => ({ label: team.name, value: team }));

  return (
    <TeamsInputSection>
      <Field id="team1" name={`games[${game}].teams[0].team`} component={Select} label="Team 1" options={teamOptions} />
      <Field id="team2" name={`games[${game}].teams[1].team`} component={Select} label="Team 2" options={teamOptions} />
    </TeamsInputSection>
  );
};

export default TeamsInput;
