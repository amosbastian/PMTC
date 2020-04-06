import React from "react";
import EventInput from "../components/ThreadCreator/EventInput";
import GameTabs from "../components/ThreadCreator/GameTabs";

const ThreadCreator: React.FC = () => {
  return (
    <div>
      <EventInput />
      <GameTabs />
    </div>
  );
};

export default ThreadCreator;
