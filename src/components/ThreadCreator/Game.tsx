import React from "react";
import styled from "styled-components";
import PickAndBanPhase from "./PickAndBanPhase";
import Objectives from "./Objectives";
import Scoreboard from "./Scoreboard";
import Result from "./Result";

const GameContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "pickAndBanPhase"
    "team1Scoreboard"
    "team2Scoreboard"
    "objectives"
    "result";

  .pick-and-ban-phase {
    grid-area: pickAndBanPhase;
  }

  .result {
    grid-area: result;
  }

  .objectives {
    grid-area: objectives;
  }

  .team-1-scoreboard {
    grid-area: team1Scoreboard;
  }

  .team-2-scoreboard {
    grid-area: team2Scoreboard;
  }

  max-width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-areas:
      "result result"
      "pickAndBanPhase objectives"
      "team1Scoreboard team2Scoreboard";
    gap: 2rem;
  }
`;

interface GameProps {
  game: number;
}

const Game: React.FC<GameProps> = React.memo(({ game }) => {
  return (
    <GameContainer>
      <Result className="result" />
      <PickAndBanPhase className="pick-and-ban-phase" />
      <Objectives className="objectives" />
      <Scoreboard className="team-1-scoreboard" team={1} />
      <Scoreboard className="team-2-scoreboard" team={2} />
    </GameContainer>
  );
});

export default Game;
