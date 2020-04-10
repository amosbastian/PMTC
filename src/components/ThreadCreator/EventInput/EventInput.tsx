import React from "react";
import styled from "styled-components";
import TextInput from "../../TextInput";
import Select from "../../Select";
import { Field, useFormikContext } from "formik";
import { ThreadCreatorFormValues } from "../types";
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
`;

interface EventInputProps {
  events: Array<EventInputEventData>;
}

const EventInput: React.FC<EventInputProps> = ({ events }) => {
  const options = events.map((event) => ({ ...event, label: event.name, value: event.name }));
  const { setFieldValue } = useFormikContext<ThreadCreatorFormValues>();

  const onChange = (option: any) => {
    setFieldValue("lolEsports", option.lolEsports ?? "");
    setFieldValue("gamepedia", option.gamepedia ?? "");
    setFieldValue("liquipedia", option.liquipedia ?? "");
  };

  return (
    <EventInputContainer>
      <Field id="event" name="event" component={Select} label="Event" options={options} onChange={onChange} />
      <Field id="lolEsports" name="lolEsports" as={TextInput} label="LoL eSports" />
      <Field id="gamepedia" name="gamepedia" as={TextInput} label="Gamepedia" />
      <Field id="liquipedia" name="liquipedia" as={TextInput} label="Liquipedia" />
      <Field id="context" name="context" as={TextInput} label="Context" />
    </EventInputContainer>
  );
};

export default EventInput;