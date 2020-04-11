import React from "react";
import Select from "../Select";
import styled from "styled-components";
import { FastField } from "formik";
import { Champion } from "./types";

const PicksInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface PicksInputProps {
  champions: Champion[];
  game: number;
}

const PicksInput: React.FC<PicksInputProps> = ({ champions, game }) => {
  const championOptions = champions.map((champion) => ({ label: champion.name, value: champion.id }));
  return (
    <PicksInputSection>
      <FastField
        id="picks1"
        name={`games[${game}].teams[0].picks`}
        component={Select}
        label="Picks team 1"
        options={championOptions}
        isMulti
      />
      <FastField
        id="picks2"
        name={`games[${game}].teams[1].picks`}
        component={Select}
        label="Picks team 2"
        options={championOptions}
        isMulti
      />
    </PicksInputSection>
  );
};

export default PicksInput;
