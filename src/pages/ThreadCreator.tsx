import React from "react";
import styled from "styled-components";
import EventInput from "../components/ThreadCreator/EventInput";
import GameTabs from "../components/ThreadCreator/GameTabs";

const ThreadCreatorSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const ThreadCreator: React.FC = () => {
  return (
    <ThreadCreatorSection>
      <EventInput />
      <GameTabs />
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
