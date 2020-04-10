import React from "react";
import Select from "../Select";
import styled from "styled-components";
import TextInput from "../TextInput";
import { FastField } from "formik";

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
  game: number;
  team: number;
}

const PlayersInput: React.FC<PlayersInputProps> = ({ game, team }) => {
  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{`Team ${team}`}</h3>
      </PlayersInputHeader>
      <FastField
        id="player1"
        name={`games[${game}].team${team}.player1`}
        component={Select}
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <p>A</p>
      <TextInput id="time" placeholder="0-0-0" />
      <FastField
        id="player2"
        name={`games[${game}].team${team}.player2`}
        component={Select}
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <p>B</p>
      <TextInput id="time" placeholder="0-0-0" />
      <FastField
        id="player3"
        name={`games[${game}].team${team}.player3`}
        component={Select}
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <p>C</p>
      <TextInput id="time" placeholder="0-0-0" />
      <FastField
        id="player4"
        name={`games[${game}].team${team}.player4`}
        component={Select}
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <p>D</p>
      <TextInput id="time" placeholder="0-0-0" />
      <FastField
        id="player5"
        name={`games[${game}].team${team}.player5`}
        component={Select}
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <p>E</p>
      <TextInput id="time" placeholder="0-0-0" />
    </PlayersInputSection>
  );
};

export default PlayersInput;
