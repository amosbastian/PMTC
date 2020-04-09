import React from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Select from "../Select";
import { Field } from "formik";

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
`;

const EventInput: React.FC = () => {
  return (
    <EventInputContainer>
      <Field
        id="event"
        name="event"
        component={Select}
        label="Event"
        options={[
          { label: "LEC", value: "LEC" },
          { label: "LCS", value: "LCS" },
        ]}
      />
      <Field
        id="lolEsports"
        name="lolEsports"
        as={TextInput}
        label="LoL eSports"
        placeholder="https://eu.lolesports.com/en/league/..."
      />
      <Field
        id="gamepedia"
        name="gamepedia"
        as={TextInput}
        label="Gamepedia"
        placeholder="https://lol.gamepedia.com/..."
      />
      <Field
        id="liquipedia"
        name="liquipedia"
        as={TextInput}
        label="Liquipedia"
        placeholder="http://liquipedia.net/leagueoflegends/..."
      />
      <Field id="context" name="context" as={TextInput} label="Context" placeholder="..." />
    </EventInputContainer>
  );
};

export default EventInput;
