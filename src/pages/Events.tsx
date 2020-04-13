import React from "react";
import styled from "styled-components";
import EventsToolbar from "../components/Events/EventsToolbar";

const EventsSection = styled.section`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 2rem;
    padding: 2rem;
  }
`;

const Events: React.FC = () => {
  return (
    <EventsSection>
      <EventsToolbar />
    </EventsSection>
  );
};

export default Events;
