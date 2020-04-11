import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import EventInput from "./EventInput/EventInput";
import { ThreadCreatorFormValues } from "./types";
import GameTabs from "./GameTabs";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { EVENT_INPUT_EVENT_FRAGMENT, EventInputEventData } from "./EventInput/fragments";

const team = {
  team: {
    id: 0,
    name: "",
  },
  bans: [],
  pickOrder: [],
  picks: [],
  players: [],
  kdas: [],
  gold: "",
  towers: "",
};

const game = {
  teams: [team, team],
  objectives: [],
  winner: "",
  time: "",
  screenshot: "",
  matchHistory: "",
  breakdown: "",
  context: "",
};

const initialValues: ThreadCreatorFormValues = {
  context: "",
  event: {
    id: 0,
    name: "",
    lolEsports: "",
    liquipedia: "",
    gamepedia: "",
  },
  games: [game, game, game, game, game],
};

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 100vw;
`;

interface TestQueryVariables {
  date: string;
}

interface TestQueryData {
  events: Array<EventInputEventData>;
}

const TEST_QUERY = gql`
  query testQuery($date: date) {
    events(where: { scheduleEnd: { _gte: $date } }) {
      id
      ...eventInputEventFragment
    }
  }
  ${EVENT_INPUT_EVENT_FRAGMENT}
`;

const ThreadCreatorForm: React.FC = () => {
  const { data, loading, error } = useQuery<TestQueryData, TestQueryVariables>(TEST_QUERY, {
    variables: {
      date: new Date().toISOString().slice(0, 10),
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={(data) => console.log(data)}>
      {() => (
        <Form>
          <EventInput events={data!.events} />
          <GameTabs />
        </Form>
      )}
    </Formik>
  );
};

export default ThreadCreatorForm;
