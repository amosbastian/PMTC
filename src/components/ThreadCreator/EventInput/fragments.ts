import { gql } from "apollo-boost";
import { Events } from "../../../generated/graphql";

export type EventInputEventData = Pick<Events, "id" | "gamepedia" | "liquipedia" | "lolEsports" | "name">;

export const EVENT_INPUT_EVENT_FRAGMENT = gql`
  fragment eventInputEventFragment on events {
    id
    gamepedia
    liquipedia
    lolEsports
    name
  }
`;
