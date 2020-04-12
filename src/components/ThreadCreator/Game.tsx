import React from "react";
import styled from "styled-components";
import PickAndBanPhase from "./PickAndBanPhase";
import Objectives from "./Objectives";

const GameContainer = styled.div`
  display: grid;
  max-width: 100%;
`;

interface GameProps {
  game: number;
}

const Game: React.FC<GameProps> = React.memo(({ game }) => {
  return (
    <GameContainer>
      <PickAndBanPhase />
      <Objectives />
    </GameContainer>
  );
});

export default Game;
