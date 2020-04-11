import React from "react";
import Select from "../Select";
import styled from "styled-components";
import { FastField } from "formik";
import { Champion } from "./types";

const BansInputSection = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
`;

interface BansInputProps {
  champions: Champion[];
  game: number;
}

const BansInput: React.FC<BansInputProps> = ({ champions, game }) => {
  const championOptions = champions.map((champion) => ({ label: champion.name, value: champion.id }));
  return (
    <BansInputSection>
      <FastField
        id="bans1"
        name={`games[${game}].teams[0].bans`}
        component={Select}
        label="Bans team 1"
        options={championOptions}
        isMulti
      />
      <FastField
        id="bans2"
        name={`games[${game}].teams[1].bans`}
        component={Select}
        label="Bans team 2"
        options={championOptions}
        isMulti
      />
    </BansInputSection>
  );
};

export default BansInput;
