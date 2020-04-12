import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";
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
    if (!champions) {
      fetchChampions();
    }
  }, [champions]);

  return <GameInputSection></GameInputSection>;
});

export default GameInput;
