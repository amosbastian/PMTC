import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views";
import Game from "./Game";

const GamesContainer = styled.div`
  display: grid;
  max-width: 100%;
`;

const Games: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    setIndex(value);
  };

  const handleChangeIndex: OnChangeIndexCallback = (changeIndex: number) => {
    setIndex(changeIndex);
  };

  return (
    <GamesContainer>
      <Tabs value={index} onChange={handleChange} variant="scrollable">
        <Tab label="Game 1" />
        <Tab label="Game 2" />
        <Tab label="Game 3" />
        <Tab label="Game 4" />
        <Tab label="Game 5" />
        <Tab label="Output" />
      </Tabs>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        <Game game={0} />
        <Game game={1} />
        <Game game={2} />
        <Game game={3} />
        <Game game={4} />
      </SwipeableViews>
    </GamesContainer>
  );
};

export default Games;
