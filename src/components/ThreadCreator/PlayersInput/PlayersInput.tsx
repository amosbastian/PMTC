import React, { useState, useEffect } from "react";
import Select from "../../Select";
import styled from "styled-components";
import TextInput from "../../TextInput";
import { Field, useFormikContext, FastField } from "formik";
import { gql } from "apollo-boost";
import { ThreadCreatorFormValues } from "../types";
import { useQuery } from "@apollo/react-hooks";
import { PlayersInputPlayerData, PLAYERS_INPUT_PLAYER_FRAGMENT } from "./fragments";
import { TeamPlayersQuery } from "../../../generated/graphql";
import { arrayMove, SortableContainer, SortableElement } from "react-sortable-hoc";

const Column = styled.ul`
  display: grid;
  gap: 1rem;
`;

const ChampionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: red;
  height: 2.375rem;
  align-self: flex-end;
`;

const SortableItem = SortableElement(({ value }: { value: string }) => <ChampionItem>{value}</ChampionItem>);

const SortableList = SortableContainer(({ items }: { items: string[] }) => {
  return (
    <Column>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </Column>
  );
});

const PlayersInputSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-columns: 8rem 1fr 4.25rem;
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
  game: number;
  team: number;
}

const PlayersInput: React.FC<PlayersInputProps> = ({ game, team }) => {
  const { setFieldValue, values } = useFormikContext<ThreadCreatorFormValues>();
  const [pickOrder, setPickOrder] = useState({ items: values.games[game].teams[0].picks });

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

  useEffect(() => {
    setFieldValue(`games[${game}].teams[${team}].pickOrder`, pickOrder.items);
  }, [pickOrder, game, setFieldValue, team]);

  if (!data) return null;

  const players = data.playerTeam.map(({ player }) => player);
  const topPlayers = playersByRoleId(players, "TOP").map((player) => ({ label: player.name, value: player }));
  const jngPlayers = playersByRoleId(players, "JNG").map((player) => ({ label: player.name, value: player }));
  const midPlayers = playersByRoleId(players, "MID").map((player) => ({ label: player.name, value: player }));
  const botPlayers = playersByRoleId(players, "BOT").map((player) => ({ label: player.name, value: player }));
  const supPlayers = playersByRoleId(players, "SUP").map((player) => ({ label: player.name, value: player }));

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    setPickOrder(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
    setFieldValue(`games[${game}].teams[${team}].pickOrder`, pickOrder.items);
  };

  return (
    <PlayersInputSection>
      <PlayersInputHeader>
        <h3>{values.games[game].teams[team].team.name}</h3>
      </PlayersInputHeader>
      <Column>
        <Field id="player1" name={`games[${game}].teams[${team}].players[0]`} component={Select} options={topPlayers} />
        <Field id="player2" name={`games[${game}].teams[${team}].players[1]`} component={Select} options={jngPlayers} />
        <Field id="player3" name={`games[${game}].teams[${team}].players[2]`} component={Select} options={midPlayers} />
        <Field id="player4" name={`games[${game}].teams[${team}].players[3]`} component={Select} options={botPlayers} />
        <Field id="player5" name={`games[${game}].teams[${team}].players[4]`} component={Select} options={supPlayers} />
      </Column>
      <Column>
        <SortableList items={pickOrder.items} onSortEnd={onSortEnd} />
      </Column>
      <Column>
        <FastField id="kda1" name={`games[${game}].teams[${team}].kdas[0]`} as={TextInput} placeholder="0-0-0" />
        <FastField id="kda2" name={`games[${game}].teams[${team}].kdas[1]`} as={TextInput} placeholder="0-0-0" />
        <FastField id="kda3" name={`games[${game}].teams[${team}].kdas[2]`} as={TextInput} placeholder="0-0-0" />
        <FastField id="kda4" name={`games[${game}].teams[${team}].kdas[3]`} as={TextInput} placeholder="0-0-0" />
        <FastField id="kda5" name={`games[${game}].teams[${team}].kdas[4]`} as={TextInput} placeholder="0-0-0" />
      </Column>
    </PlayersInputSection>
  );
};

export default PlayersInput;
