import React from "react";
import styled from "styled-components";
import EventSelector from "../components/ThreadCreator/EventSelector";

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
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
