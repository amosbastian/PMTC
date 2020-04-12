import React from "react";
import styled from "styled-components";
import { EventInputEventData } from "./fragments";

const EventInputContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-areas:
    "event"
    "lolEsports"
    "gamepedia"
    "liquipedia"
    "context";

  #event {
    grid-area: event;
  }

  #lolesports {
    grid-area: lolEsports;
  }

  #gamepedia {
    grid-area: gamepedia;
  }

  #liquipedia {
    grid-area: liquipedia;
  }

  #context {
    grid-area: context;
  }

  @media (min-width: 1024px) {
    grid-template-areas:
      "event lolEsports"
      "gamepedia liquipedia"
      "context context";
  }
`;

interface EventInputProps {
  events: Array<EventInputEventData>;
}

const EventInput: React.FC<EventInputProps> = ({ events }) => {
  const options = events.map((event) => ({ ...event, label: event.name, value: event }));

  return <EventInputContainer></EventInputContainer>;
};

export default EventInput;
