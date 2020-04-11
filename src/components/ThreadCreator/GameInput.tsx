import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BansInput from "./BansInput";
import TeamsInput from "./TeamsInput/TeamsInput";
import PicksInput from "./PicksInput";
import PlayersInput from "./PlayersInput/PlayersInput";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";
import GameFinishedInput from "./GameFinishedInput";
import fetch from "isomorphic-unfetch";
import { Champion } from "./types";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

interface GameInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const GameInput: React.FC<GameInputProps> = React.memo(({ game, teams }) => {
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
    fetchChampions();
  }, []);

  if (!champions) return null;

  return (
    <GameInputSection>
      <TeamsInput game={game} teams={teams} />
      <BansInput champions={champions} game={game} />
      <PicksInput champions={champions} game={game} />
      <PlayersInput champions={champions} game={game} team={0} />
      <PlayersInput champions={champions} game={game} team={1} />
      <GameFinishedInput game={game} teams={teams} />
    </GameInputSection>
  );
});

export default GameInput;
