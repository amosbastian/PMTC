import React, { useState } from "react";
import styled from "styled-components";
import GameInput from "./GameInput";
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views";
import GameTab from "./GameTab";
import ThreadOutput from "./ThreadOutput";
import { useFormikContext } from "formik";
import { ThreadCreatorFormValues } from "./types";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";

const TABS = ["1", "2", "3", "4", "5", "Output"];

const Tabs = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

interface TestQueryVariables {
  eventId: number;
}

interface TestQueryData {
  eventTeam: Array<{
    team: TeamsInputTeamsData;
  }>;
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

const GameTabs: React.FC = () => {
  const [view, setView] = useState(0);
  const { values } = useFormikContext<ThreadCreatorFormValues>();
  const { data } = useQuery<TestQueryData, TestQueryVariables>(TEST_QUERY, {
    skip: !values.event,
    variables: {
      eventId: values.event!,
    },
  });

  const teams = data?.eventTeam.map(({ team }) => team);

  if (!teams) return null;

  const onClickHandler = (viewIndex: number) => {
    setView(viewIndex);
  };

  const onChangeHandler: OnChangeIndexCallback = (viewIndex: number) => {
    setView(viewIndex);
  };

  return (
    <>
      <Tabs>
        {TABS.map((name, index) => (
          <GameTab key={name} active={index === view} name={name} onClick={() => onClickHandler(index)} />
        ))}
      </Tabs>
      <SwipeableViews index={view} onChangeIndex={onChangeHandler}>
        <GameInput game={0} teams={teams} />
        <GameInput game={1} teams={teams} />
        <GameInput game={2} teams={teams} />
        <GameInput game={3} teams={teams} />
        <GameInput game={4} teams={teams} />
        <ThreadOutput />
      </SwipeableViews>
    </>
  );
};

export default GameTabs;
