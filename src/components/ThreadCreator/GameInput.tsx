import React from "react";
import Select from "../Select";
import TextInput from "../TextInput";
import styled from "styled-components";
import BansInput from "./BansInput";
import TeamsInput from "./TeamsInput";
import PicksInput from "./PicksInput";
import PlayersInput from "./PlayersInput";
import { FastField } from "formik";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const GameInputFooter = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface GameInputProps {
  game: number;
}

const GameInput: React.FC<GameInputProps> = React.memo(({ game }) => {
  return (
    <GameInputSection>
      <TeamsInput game={game} />
      <BansInput game={game} />
      <PicksInput game={game} />
      <PlayersInput game={game} team={1} />
      <PlayersInput game={game} team={2} />
      <GameInputFooter>
        <FastField
          id="winner"
          name={`games[${game}].winner`}
          component={Select}
          label="Winner"
          options={[
            { label: "TSM", value: "TSM" },
            { label: "CLG", value: "CLG" },
          ]}
        />
        <FastField id="time" name={`games[${game}].time`} as={TextInput} label="Time" />
        <FastField
          id="screenshot"
          name={`games[${game}].screenshot`}
          as={TextInput}
          label="Screenshot"
          placeholder="https//imgur.com/..."
        />
        <FastField
          id="matchHistory"
          name={`games[${game}].matchHistory`}
          as={TextInput}
          label="Match history"
          placeholder="..."
        />
        <FastField
          id="breakdown"
          name={`games[${game}].breakdown`}
          as={TextInput}
          label="Breakdown"
          placeholder="..."
        />
        <FastField id="context" name={`games[${game}].context`} as={TextInput} label="Context" placeholder="..." />
      </GameInputFooter>
    </GameInputSection>
  );
});

export default GameInput;
