import { gql } from "apollo-boost";
import { Players, Roles } from "../../../generated/graphql";

export type PlayersInputPlayerData = Pick<Players, "id" | "name" | "starter"> & {
  role: Pick<Roles, "id" | "shortName">;
};

export const PLAYERS_INPUT_PLAYER_FRAGMENT = gql`
  fragment playersInputPlayerFragment on players {
    id
    name
    starter
    role {
      id
      shortName
    }
  }
`;
