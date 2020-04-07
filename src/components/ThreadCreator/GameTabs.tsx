import React, { useState } from "react";
import styled from "styled-components";
import GameInput from "./GameInput/GameInput";
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views";
import GameTab from "./GameTab";

const TABS = ["1", "2", "3", "4", "5", "Output"];

const Tabs = styled.ol`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const GameTabs: React.FC = () => {
  const [view, setView] = useState(0);

  const onClickHandler = (viewIndex: number) => {
    setView(viewIndex);
  };

  const onChangeHandler: OnChangeIndexCallback = (viewIndex: number) => {
    setView(viewIndex);
  };

  return (
    <>
      <Tabs>
        {TABS.map((name, index) => (
          <GameTab key={name} active={index === view} name={name} onClick={() => onClickHandler(index)} />
        ))}
      </Tabs>
      <SwipeableViews index={view} onChangeIndex={onChangeHandler}>
        <GameInput game={1} />
        <GameInput game={2} />
        <GameInput game={3} />
        <GameInput game={4} />
        <GameInput game={5} />
      </SwipeableViews>
    </>
  );
};

export default GameTabs;
