import React from "react";
import styled from "styled-components";
import EventSelector from "../components/ThreadCreator/EventSelector";
import PickAndBanPhase from "../components/ThreadCreator/PickAndBanPhase";

const ThreadCreatorSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
  }
`;

const ThreadCreator: React.FC = () => {
  return (
    <ThreadCreatorSection>
      <EventSelector />
      <PickAndBanPhase />
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
