import React from "react";
import styled from "styled-components";
import PickAndBanPhase from "./PickAndBanPhase";
import Objectives from "./Objectives";
import Scoreboard from "./Scoreboard";

const GameContainer = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

interface GameProps {
  game: number;
}

const Game: React.FC<GameProps> = React.memo(({ game }) => {
  return (
    <GameContainer>
      <PickAndBanPhase />
      <Objectives />
      <Scoreboard team={1} />
      <Scoreboard team={2} />
    </GameContainer>
  );
});

export default Game;
