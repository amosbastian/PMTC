import React from "react";
import styled from "styled-components";
import { FastField, useFormikContext } from "formik";
import Select from "../Select";
import TextInput from "../TextInput";
import { ThreadCreatorFormValues } from "./types";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";

const GameInputFooter = styled.footer`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface GameFinishedInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const GameFinishedInput: React.FC<GameFinishedInputProps> = ({ game, teams }) => {
  const { values } = useFormikContext<ThreadCreatorFormValues>();

  const team1Id = values.games[game].teams[0].team.id;
  const team2Id = values.games[game].teams[1].team.id;

  if (!team1Id || !team2Id) return null;

  const winnerOptions = teams
    .filter((team) => team.id === team1Id || team.id === team2Id)
    .map((team) => ({ label: team.name, value: team }));

  return (
    <GameInputFooter>
      <FastField id="winner" name={`games[${game}].winner`} component={Select} label="Winner" options={winnerOptions} />
      <FastField id="time" name={`games[${game}].time`} as={TextInput} label="Time" />
      <FastField id="screenshot" name={`games[${game}].screenshot`} as={TextInput} label="Screenshot" />
      <FastField id="matchHistory" name={`games[${game}].matchHistory`} as={TextInput} label="Match history" />
      <FastField id="breakdown" name={`games[${game}].breakdown`} as={TextInput} label="Breakdown" />
      <FastField id="context" name={`games[${game}].context`} as={TextInput} label="Context (picks)" />
    </GameInputFooter>
  );
};

export default GameFinishedInput;
