import React from "react";
import Select from "../Select";
import styled from "styled-components";
import { FastField } from "formik";

const TeamsInputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
`;

interface TeamsInputProps {
  game: number;
}

const TeamsInput: React.FC<TeamsInputProps> = ({ game }) => {
  return (
    <TeamsInputSection>
      <FastField
        id="team1"
        name={`games[${game}].team1.name`}
        component={Select}
        label="Team 1"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
      <FastField
        id="team2"
        name={`games[${game}].team2.name`}
        component={Select}
        label="Team 2"
        options={[
          { label: "TSM", value: "TSM" },
          { label: "CLG", value: "CLG" },
        ]}
      />
    </TeamsInputSection>
  );
};

export default TeamsInput;
