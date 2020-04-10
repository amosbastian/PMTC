import React from "react";
import Select from "../../Select";
import styled from "styled-components";
import { FastField } from "formik";
import { TeamsInputTeamsData } from "./fragments";

const TeamsInputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
`;

interface TeamsInputProps {
  game: number;
  teams: TeamsInputTeamsData[];
}

const TeamsInput: React.FC<TeamsInputProps> = ({ game, teams }) => {
  const options = teams.map((team) => ({ label: team.name, value: team.id }));

  return (
    <TeamsInputSection>
      <FastField id="team1" name={`games[${game}].teams[0].id`} component={Select} label="Team 1" options={options} />
      <FastField id="team2" name={`games[${game}].teams[1].id`} component={Select} label="Team 2" options={options} />
    </TeamsInputSection>
  );
};

export default TeamsInput;
