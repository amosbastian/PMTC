import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import EventInput from "./EventInput";
import { ThreadCreatorFormValues } from "./types";
import GameTabs from "./GameTabs";

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

const ThreadCreatorForm: React.FC = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(data) => console.log(data)}>
      {() => (
        <Form>
          <EventInput />
          <GameTabs />
        </Form>
      )}
    </Formik>
  );
};

export default ThreadCreatorForm;
