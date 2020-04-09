import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import EventInput from "./EventInput";
import { ThreadCreatorFormValues } from "./types";
import GameTabs from "./GameTabs";

const initialValues: ThreadCreatorFormValues = {
  lolEsports: "",
  gamepedia: "",
  liquipedia: "",
  context: "",
  event: [],
  games: [
    {
      team1: {
        name: "",
        bans: [],
        picks: [],
        players: [],
        gold: "",
        towers: "",
      },
      team2: {
        name: "",
        bans: [],
        picks: [],
        players: [],
        gold: "",
        towers: "",
      },
      winner: "",
      time: "",
      screenshot: "",
      matchHistory: "",
      breakdown: "",
    },
  ],
};

const Form = styled.form`
  max-width: 100vw;
`;

const ThreadCreatorForm: React.FC = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(data) => console.log(data)}>
      {({ values }) => (
        <Form>
          <EventInput />
          <GameTabs />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default ThreadCreatorForm;
