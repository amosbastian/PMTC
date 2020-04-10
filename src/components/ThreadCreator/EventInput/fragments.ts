import { gql } from "apollo-boost";
import { Events } from "../../../generated/graphql";

export type EventInputEventData = Pick<Events, "gamepedia" | "liquipedia" | "lolEsports" | "name">;

export const EVENT_INPUT_EVENT_FRAGMENT = gql`
  fragment eventInputEventFragment on events {
    gamepedia
    liquipedia
    lolEsports
    name
  }
`;
