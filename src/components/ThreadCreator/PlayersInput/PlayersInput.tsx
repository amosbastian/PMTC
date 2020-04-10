import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import TextInput from "../../TextInput";
import { Field, useFormikContext } from "formik";
import { gql } from "apollo-boost";
import { ThreadCreatorFormValues } from "../types";
import { useQuery } from "@apollo/react-hooks";
import { PlayersInputPlayerData, PLAYERS_INPUT_PLAYER_FRAGMENT } from "./fragments";
import { TeamPlayersQuery } from "../../../generated/graphql";

const PlayersInputSection = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content 6rem;
  gap: 1rem;
  padding: 0 1rem;
`;

const PlayersInputHeader = styled.header`
  grid-column: 1 / -1;
`;

type Role = "top" | "jng" | "mid" | "bot" | "sup";

const roleIdToRoleName: Record<Role, number> = {
  top: 1,
  jng: 2,
  mid: 3,
  bot: 4,
  sup: 5,
};

const playersByRoleId = (players: PlayersInputPlayerData[], role: Role) => {
  return players.filter((player) => player.roleId === roleIdToRoleName[role]);
};

interface TeamPlayersVariables {
  teamId: number;
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

  const { data } = useQuery<TeamPlayersQuery, TeamPlayersVariables>(TEAM_PLAYERS, {
    skip: values.games[game].teams[team].id === undefined,
    variables: {
      teamId: values.games[game].teams[team].id!,
    },
    onCompleted: (queryData) => {
      const players = queryData.playerTeam
        .map(({ player }) => player)
        .sort((playerA, playerB) => Number(playerA.starter) - Number(playerB.starter))
        .reverse();
      setFieldValue(`games[${game}].teams[${team}].player1`, playersByRoleId(players, "top")[0].name);
      setFieldValue(`games[${game}].teams[${team}].player2`, playersByRoleId(players, "jng")[0].name);
      setFieldValue(`games[${game}].teams[${team}].player3`, playersByRoleId(players, "mid")[0].name);
      setFieldValue(`games[${game}].teams[${team}].player4`, playersByRoleId(players, "bot")[0].name);
      setFieldValue(`games[${game}].teams[${team}].player5`, playersByRoleId(players, "sup")[0].name);
    },
  });

  if (!data) return null;

  const players = data.playerTeam.map(({ player }) => player);
  const topPlayers = playersByRoleId(players, "top").map((player) => ({ label: player.name, value: player.name }));
  const jngPlayers = playersByRoleId(players, "jng").map((player) => ({ label: player.name, value: player.name }));
  const midPlayers = playersByRoleId(players, "mid").map((player) => ({ label: player.name, value: player.name }));
  const botPlayers = playersByRoleId(players, "bot").map((player) => ({ label: player.name, value: player.name }));
  const supPlayers = playersByRoleId(players, "sup").map((player) => ({ label: player.name, value: player.name }));

  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{`Team ${team + 1}`}</h3>
      </PlayersInputHeader>
      <Field id="player1" name={`games[${game}].teams[${team}].player1`} component={Select} options={topPlayers} />
      <p>A</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player2" name={`games[${game}].teams[${team}].player2`} component={Select} options={jngPlayers} />
      <p>B</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player3" name={`games[${game}].teams[${team}].player3`} component={Select} options={midPlayers} />
      <p>C</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player4" name={`games[${game}].teams[${team}].player4`} component={Select} options={botPlayers} />
      <p>D</p>
      <TextInput id="time" placeholder="0-0-0" />
      <Field id="player5" name={`games[${game}].teams[${team}].player5`} component={Select} options={supPlayers} />
      <p>E</p>
      <TextInput id="time" placeholder="0-0-0" />
    </PlayersInputSection>
  );
};

export default PlayersInput;
