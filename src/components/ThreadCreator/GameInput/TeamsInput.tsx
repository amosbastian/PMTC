import React from "react";
import Select from "../../Select";
import styled from "styled-components";

const TeamsInputSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;
`;

const TeamsInput: React.FC = () => {
  return (
    <TeamsInputSection>
      <Select id="team1" label="Team 1" />
      <Select id="team2" label="Team 2" />
    </TeamsInputSection>
  );
};

export default TeamsInput;
