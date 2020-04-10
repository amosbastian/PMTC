import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import TextInput from "../../TextInput";
import { Field, useFormikContext } from "formik";
import { gql } from "apollo-boost";
import { ThreadCreatorFormValues } from "../types";
import { useQuery } from "@apollo/react-hooks";
import { PlayersInputPlayerData, PLAYERS_INPUT_PLAYER_FRAGMENT } from "./fragments";

const PlayersInputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content 6rem;
  gap: 1rem;
  padding: 0 1rem;
`;

const PlayersInputHeader = styled.header`
  grid-column: 1 / -1;
`;

const playersByRoleId = (players: PlayersInputPlayerData[], roleId: number) => {
  return players
    .filter((player) => player.roleId === roleId)
    .map((player) => ({ label: player.name, value: player.id }));
};

interface TeamPlayersVariables {
  teamId: number;
}

interface TeamPlayersData {
  playerTeam: Array<{
    player: PlayersInputPlayerData;
  }>;
}

const TEAM_PLAYERS = gql`
  query teamPlayers($teamId: Int) {
    playerTeam(where: { teamId: { _eq: $teamId } }) {
      player {
        ...playersInputPlayerFragment
      }
    }
  }
  ${PLAYERS_INPUT_PLAYER_FRAGMENT}
`;

interface PlayersInputProps {
  game: number;
  team: number;
}

const PlayersInput: React.FC<PlayersInputProps> = ({ game, team }) => {
  const { setFieldValue, values } = useFormikContext<ThreadCreatorFormValues>();

  const { data } = useQuery<TeamPlayersData, TeamPlayersVariables>(TEAM_PLAYERS, {
    skip: values.games[game].teams[team].id === undefined,
    variables: {
      teamId: values.games[game].teams[team].id!,
    },
    onCompleted: (queryData) => {
      const players = queryData.playerTeam
        .map(({ player }) => player)
        .sort((playerA, playerB) => Number(playerA.starter) - Number(playerB.starter))
        .reverse();
      setFieldValue(`games[${game}].teams[${team}].player1`, playersByRoleId(players, 1)[0].value);
      setFieldValue(`games[${game}].teams[${team}].player2`, playersByRoleId(players, 2)[0].value);
      setFieldValue(`games[${game}].teams[${team}].player3`, playersByRoleId(players, 3)[0].value);
      setFieldValue(`games[${game}].teams[${team}].player4`, playersByRoleId(players, 4)[0].value);
      setFieldValue(`games[${game}].teams[${team}].player5`, playersByRoleId(players, 5)[0].value);
    },
  });

  if (!data) return null;

  const players = data.playerTeam.map(({ player }) => player);
  const toplaners = playersByRoleId(players, 1);
  const junglers = playersByRoleId(players, 2);
  const midlaners = playersByRoleId(players, 3);
  const botlaners = playersByRoleId(players, 4);
  const supports = playersByRoleId(players, 5);

  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{`Team ${team + 1}`}</h3>
      </PlayersInputHeader>
      <Field id="player1" name={`games[${game}].teams[${team}].player1`} component={Select} options={toplaners} />
      <p>A</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player2" name={`games[${game}].teams[${team}].player2`} component={Select} options={junglers} />
      <p>B</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player3" name={`games[${game}].teams[${team}].player3`} component={Select} options={midlaners} />
      <p>C</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player4" name={`games[${game}].teams[${team}].player4`} component={Select} options={botlaners} />
      <p>D</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player5" name={`games[${game}].teams[${team}].player5`} component={Select} options={supports} />
      <p>E</p>
      <TextInput id="time" placeholder="0-0-0" />
    </PlayersInputSection>
  );
};

export default PlayersInput;
