import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

const GameInputSection = styled.section`
  display: grid;
  gap: 1rem;
`;

const GameInput: React.FC = React.memo(() => {
  const [champions, setChampions] = useState<undefined | any[]>();

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
