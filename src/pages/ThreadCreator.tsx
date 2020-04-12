import React from "react";
import styled from "styled-components";
import Event from "../components/ThreadCreator/Event";
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
      <Event />
      <Games />
    </ThreadCreatorSection>
  );
};

export default ThreadCreator;
