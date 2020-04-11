import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BansInput from "./BansInput";
import TeamsInput from "./TeamsInput/TeamsInput";
import PicksInput from "./PicksInput";
import PlayersInput from "./PlayersInput/PlayersInput";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";
import GameFinishedInput from "./GameFinishedInput";
import fetch from "isomorphic-unfetch";
import { Champion, ThreadCreatorFormValues } from "./types";
import { useFormikContext } from "formik";
import ObjectivesInput from "./ObjectivesInput";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const picksAndBansFilled = (values: ThreadCreatorFormValues, game: number) => {
  const team1Picked = values.games[game].teams[0]?.picks.length === 5;
  const team2Picked = values.games[game].teams[1]?.picks.length === 5;
  const team1Banned = values.games[game].teams[0]?.bans.length === 5;
  const team2Banned = values.games[game].teams[1]?.bans.length === 5;

  return team1Picked && team2Picked && team1Banned && team2Banned;
};

interface GameInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const GameInput: React.FC<GameInputProps> = React.memo(({ game, teams }) => {
  const { values } = useFormikContext<ThreadCreatorFormValues>();
  const [champions, setChampions] = useState<undefined | Champion[]>();

  useEffect(() => {
    const fetchChampions = async () => {
      const versionsResponse = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
      const versionsJson = await versionsResponse.json();
      const championsResponse = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${versionsJson[0]}/data/en_US/champion.json`,
      );
      const championsJson = await championsResponse.json();
      const championsData = Object.keys(championsJson.data).map((key) => championsJson.data[key]);
      setChampions(championsData);
    };
    if (!champions) {
      fetchChampions();
    }
  }, [champions]);

  if (!champions) return null;

  const picksAndBansComplete = picksAndBansFilled(values, game);

  return (
    <GameInputSection>
      <TeamsInput game={game} teams={teams} />
      <BansInput champions={champions} game={game} />
      <PicksInput champions={champions} game={game} />
      <ObjectivesInput game={game} />
      {picksAndBansComplete && (
        <>
          <PlayersInput game={game} team={0} />
          <PlayersInput game={game} team={1} />
          <GameFinishedInput game={game} teams={teams} />
        </>
      )}
    </GameInputSection>
  );
});

export default GameInput;
