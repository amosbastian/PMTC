import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Select from "../Select";

const EventInputContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-areas:
    "event"
    "lolesports"
    "gamepedia"
    "liquipedia"
    "context";

  #event {
    grid-area: event;
  }

  #lolesports {
    grid-area: lolesports;
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
`;

const EventInput: React.FC = () => {
  return (
    <EventInputContainer>
      <Select id="event" label="Event" />
      <TextInput id="lolesports" label="LoL eSports" placeholder="https://eu.lolesports.com/en/league/..." />
      <TextInput id="gamepedia" label="Gamepedia" placeholder="https://lol.gamepedia.com/..." />
      <TextInput id="liquipedia" label="Liquipedia" placeholder="http://liquipedia.net/leagueoflegends/..." />
      <TextInput id="context" label="Context" placeholder="..." />
    </EventInputContainer>
  );
};

export default EventInput;
