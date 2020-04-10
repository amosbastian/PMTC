import React from "react";
import Select from "../Select";
import TextInput from "../TextInput";
import styled from "styled-components";
import BansInput from "./BansInput";
import TeamsInput from "./TeamsInput/TeamsInput";
import PicksInput from "./PicksInput";
import PlayersInput from "./PlayersInput/PlayersInput";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";
import GameFinishedInput from "./GameFinishedInput";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

interface GameInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const GameInput: React.FC<GameInputProps> = React.memo(({ game, teams }) => {
  return (
    <GameInputSection>
      <TeamsInput game={game} teams={teams} />
      <BansInput game={game} />
      <PicksInput game={game} />
      <PlayersInput game={game} team={0} />
      <PlayersInput game={game} team={1} />
      <GameFinishedInput game={game} teams={teams} />
    </GameInputSection>
  );
});

export default GameInput;
