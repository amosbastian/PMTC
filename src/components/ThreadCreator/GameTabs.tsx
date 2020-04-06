import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GameInput from "./GameInput";

const GameTabs: React.FC = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Game 1</Tab>
        <Tab>Game 2</Tab>
        <Tab>Game 3</Tab>
        <Tab>Game 4</Tab>
        <Tab>Game 5</Tab>
        <Tab>Output</Tab>
      </TabList>

      <TabPanel>
        <GameInput game={1} />
      </TabPanel>
      <TabPanel>
        <GameInput game={2} />
      </TabPanel>
      <TabPanel>
        <GameInput game={3} />
      </TabPanel>
      <TabPanel>
        <GameInput game={4} />
      </TabPanel>
      <TabPanel>
        <GameInput game={5} />
      </TabPanel>
      <TabPanel>Output</TabPanel>
    </Tabs>
  );
};

export default GameTabs;
