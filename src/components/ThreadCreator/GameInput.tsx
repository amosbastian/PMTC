import React from "react";
import Select from "../Select";
import TextInput from "../TextInput";

interface GameInputProps {
  game: number;
}

const GameInput: React.FC<GameInputProps> = ({ game }) => {
  return (
    <div>
      <div>
        <Select id="winner" label="Winner" />
        <TextInput id="time" label="Time" placeholder="30" />
        <TextInput id="screenshot" label="Screenshot" placeholder="https//imgur.com/..." />
        <TextInput id="matchHistory" label="Match history" placeholder="..." />
        <TextInput id="breakdown" label="Breakdown" placeholder="..." />
      </div>
    </div>
  );
};

export default GameInput;
