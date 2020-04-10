import { gql } from "apollo-boost";
import { Teams } from "../../../generated/graphql";

export type TeamsInputTeamsData = Pick<Teams, "id" | "name">;

export const TEAMS_INPUT_TEAMS_FRAGMENT = gql`
  fragment teamsInputTeamsFragment on teams {
    id
    name
  }
`;
