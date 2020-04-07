import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import TextInput from "../../TextInput";

const PlayersInputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content 6rem;
  gap: 1rem;
  padding: 0 1rem;
`;

const PlayersInputHeader = styled.header`
  grid-column: 1 / -1;
`;

interface PlayersInputProps {
  team: number;
}

const PlayersInput: React.FC<PlayersInputProps> = ({ team }) => {
  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{`Team ${team}`}</h3>
      </PlayersInputHeader>
      <Select id="player1" />
      <p>A</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Select id="player2" />
      <p>B</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Select id="player3" />
      <p>C</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Select id="player4" />
      <p>D</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Select id="player5" />
      <p>E</p>
      <TextInput id="time" placeholder="0-0-0" />
    </PlayersInputSection>
  );
};

export default PlayersInput;
