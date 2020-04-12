import React from "react";
import styled from "styled-components";
import EventSelector from "../components/ThreadCreator/EventSelector";
import Games from "../components/ThreadCreator/Games";

const ThreadCreatorSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const ThreadCreator: React.FC = () => {
  return (
    <ThreadCreatorSection>
      <EventSelector />
      <Games />
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
