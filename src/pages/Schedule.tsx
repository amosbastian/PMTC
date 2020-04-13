import React from "react";
import styled from "styled-components";

const ScheduleSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const Schedule: React.FC = () => {
  return <ScheduleSection>Schedule</ScheduleSection>;
};

export default Schedule;
