import React from "react";
import Select from "../../Select";
import TextInput from "../../TextInput";
import styled from "styled-components";
import BansInput from "./BansInput";
import TeamsInput from "./TeamsInput";
import PicksInput from "./PicksInput";
import PlayersInput from "./PlayersInput";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const GameInputHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: grey;
`;

const GameInputFooter = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface GameInputProps {
  game: number;
}

const GameInput: React.FC<GameInputProps> = ({ game }) => {
  return (
    <GameInputSection>
      <TeamsInput />
      <BansInput />
      <PicksInput />
      <PlayersInput team={1} />
      <PlayersInput team={2} />
      <GameInputFooter>
        <Select id="winner" label="Winner" />
        <TextInput id="time" label="Time" placeholder="30" />
        <TextInput id="screenshot" label="Screenshot" placeholder="https//imgur.com/..." />
        <TextInput id="matchHistory" label="Match history" placeholder="..." />
        <TextInput id="breakdown" label="Breakdown" placeholder="..." />
        <TextInput id="context" label="Context" placeholder="..." />
      </GameInputFooter>
    </GameInputSection>
  );
};

export default GameInput;
