import React from "react";
import GameInput from "./GameInput/GameInput";
import SwipeableViews from "react-swipeable-views";

const GameTabs: React.FC = () => {
  return (
    <SwipeableViews>
      <GameInput game={1} />
      <GameInput game={2} />
      <GameInput game={3} />
      <GameInput game={4} />
      <GameInput game={5} />
    </SwipeableViews>
  );
};

export default GameTabs;
