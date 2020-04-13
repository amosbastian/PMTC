import React from "react";
import styled from "styled-components";
import PlayersToolbar from "../components/Players/PlayersToolbar";

const PlayersSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const Players: React.FC = () => {
  return (
    <PlayersSection>
      <PlayersToolbar />
    </PlayersSection>
  );
};

export default Players;
