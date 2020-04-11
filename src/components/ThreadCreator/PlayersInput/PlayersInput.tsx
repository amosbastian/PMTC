import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import TextInput from "../../TextInput";
import { Field, useFormikContext, FastField } from "formik";
import { gql } from "apollo-boost";
import { ThreadCreatorFormValues, Champion } from "../types";
import { useQuery } from "@apollo/react-hooks";
import { PlayersInputPlayerData, PLAYERS_INPUT_PLAYER_FRAGMENT } from "./fragments";
import { TeamPlayersQuery } from "../../../generated/graphql";

const ChampionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: red;
  height: 2.375rem;
  align-self: flex-end;
`;

const PlayersInputSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

const PlayersInputRow = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 4.25rem;
  gap: 1rem;
  height: 2.375rem;
`;

const PlayersInputHeader = styled.header`
  grid-column: 1 / -1;
`;

const playersByRoleId = (players: PlayersInputPlayerData[], role: string) => {
  return players.filter((player) => player.role.shortName === role);
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
  champions: Champion[];
  game: number;
  team: number;
}

const PlayersInput: React.FC<PlayersInputProps> = ({ champions, game, team }) => {
  const { setFieldValue, values } = useFormikContext<ThreadCreatorFormValues>();

  const { data } = useQuery<TeamPlayersQuery, TeamPlayersVariables>(TEAM_PLAYERS, {
    skip: values.games[game].teams[team].team.id === 0,
    variables: {
      teamId: values.games[game].teams[team].team.id!,
    },
    onCompleted: (queryData) => {
      const players = queryData.playerTeam
        .map(({ player }) => player)
        .sort((playerA, playerB) => Number(playerA.starter) - Number(playerB.starter))
        .reverse();
      setFieldValue(`games[${game}].teams[${team}].players[0]`, playersByRoleId(players, "TOP")[0]);
      setFieldValue(`games[${game}].teams[${team}].players[1]`, playersByRoleId(players, "JNG")[0]);
      setFieldValue(`games[${game}].teams[${team}].players[2]`, playersByRoleId(players, "MID")[0]);
      setFieldValue(`games[${game}].teams[${team}].players[3]`, playersByRoleId(players, "BOT")[0]);
      setFieldValue(`games[${game}].teams[${team}].players[4]`, playersByRoleId(players, "SUP")[0]);
    },
  });

  if (!data) return null;

  const players = data.playerTeam.map(({ player }) => player);
  const topPlayers = playersByRoleId(players, "TOP").map((player) => ({ label: player.name, value: player }));
  const jngPlayers = playersByRoleId(players, "JNG").map((player) => ({ label: player.name, value: player }));
  const midPlayers = playersByRoleId(players, "MID").map((player) => ({ label: player.name, value: player }));
  const botPlayers = playersByRoleId(players, "BOT").map((player) => ({ label: player.name, value: player }));
  const supPlayers = playersByRoleId(players, "SUP").map((player) => ({ label: player.name, value: player }));

  const getChampion = (player: number) => {
    const picks = values.games[game].teams[team]?.picks;
    return picks && picks[player] ? picks[player] : null;
  };

  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{values.games[game].teams[team].team.name}</h3>
      </PlayersInputHeader>
      <PlayersInputRow>
        <Field id="player1" name={`games[${game}].teams[${team}].players[0]`} component={Select} options={topPlayers} />
        <ChampionItem>{getChampion(0) ?? "No"}</ChampionItem>
        <FastField id="kda1" name={`games[${game}].teams[${team}].kdas[0]`} as={TextInput} placeholder="0-0-0" />
      </PlayersInputRow>
      <PlayersInputRow>
        <Field id="player2" name={`games[${game}].teams[${team}].players[1]`} component={Select} options={jngPlayers} />
        <ChampionItem>{getChampion(1) ?? "No"}</ChampionItem>
        <FastField id="kda2" name={`games[${game}].teams[${team}].kdas[1]`} as={TextInput} placeholder="0-0-0" />
      </PlayersInputRow>
      <PlayersInputRow>
        <Field id="player3" name={`games[${game}].teams[${team}].players[2]`} component={Select} options={midPlayers} />
        <ChampionItem>{getChampion(2) ?? "No"}</ChampionItem>
        <FastField id="kda3" name={`games[${game}].teams[${team}].kdas[2]`} as={TextInput} placeholder="0-0-0" />
      </PlayersInputRow>
      <PlayersInputRow>
        <Field id="player4" name={`games[${game}].teams[${team}].players[3]`} component={Select} options={botPlayers} />
        <ChampionItem>{getChampion(3) ?? "No"}</ChampionItem>
        <FastField id="kda4" name={`games[${game}].teams[${team}].kdas[3]`} as={TextInput} placeholder="0-0-0" />
      </PlayersInputRow>
      <PlayersInputRow>
        <Field id="player5" name={`games[${game}].teams[${team}].players[4]`} component={Select} options={supPlayers} />
        <ChampionItem>{getChampion(4) ?? "No"}</ChampionItem>
        <FastField id="kda5" name={`games[${game}].teams[${team}].kdas[4]`} as={TextInput} placeholder="0-0-0" />
      </PlayersInputRow>
    </PlayersInputSection>
  );
};

export default PlayersInput;
