import React from "react";
import styled from "styled-components";
import TeamsToolbar from "../components/Teams/TeamsToolbar";

const TeamsSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const Teams: React.FC = () => {
  return (
    <TeamsSection>
      <TeamsToolbar />
    </TeamsSection>
  );
};

export default Teams;
