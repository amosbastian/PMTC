import { gql } from "apollo-boost";
import { Players } from "../../../generated/graphql";

export type PlayersInputPlayerData = Pick<Players, "id" | "name" | "roleId" | "starter">;

export const PLAYERS_INPUT_PLAYER_FRAGMENT = gql`
  fragment playersInputPlayerFragment on players {
    id
    name
    roleId
    starter
  }
`;
