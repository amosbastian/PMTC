import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import EventInput from "./EventInput/EventInput";
import { ThreadCreatorFormValues } from "./types";
import GameTabs from "./GameTabs";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { EVENT_INPUT_EVENT_FRAGMENT } from "./EventInput/fragments";

const game = {
  team1: {
    name: "",
    bans: [],
    picks: [],
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    gold: "",
    towers: "",
  },
  team2: {
    name: "",
    bans: [],
    picks: [],
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    gold: "",
    towers: "",
  },
  winner: "",
  time: "",
  screenshot: "",
  matchHistory: "",
  breakdown: "",
};

const initialValues: ThreadCreatorFormValues = {
  lolEsports: "",
  gamepedia: "",
  liquipedia: "",
  context: "",
  event: [],
  games: [game, game, game, game, game],
};

const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 100vw;
`;

const TEST_QUERY = gql`
  query {
    events(where: { scheduleEnd: { _gte: "2020-04-10" } }) {
      id
      ...eventInputEventFragment
    }
  }
  ${EVENT_INPUT_EVENT_FRAGMENT}
`;

const ThreadCreatorForm: React.FC = () => {
  const { data, loading, error } = useQuery(TEST_QUERY);

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
          <EventInput events={data.events} />
          <GameTabs />
        </Form>
      )}
    </Formik>
  );
};

export default ThreadCreatorForm;
