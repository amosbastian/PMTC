import { TeamsInputTeamsData } from "./TeamsInput/fragments";
import { EventInputEventData } from "./EventInput/fragments";

interface TeamFormValues {
  team: TeamsInputTeamsData;
  bans: string[];
  pickOrder: string[];
  picks: string[];
  players: string[];
  kdas: string[];
  gold: string;
  towers: string;
}

interface GameFormValues {
  teams: TeamFormValues[];
  winner: string;
  time: string;
  screenshot: string;
  matchHistory: string;
  breakdown: string;
  context: string;
}

export interface ThreadCreatorFormValues {
  context: string;
  event: EventInputEventData;
  games: GameFormValues[];
}
export interface Champion {
  id: string;
  name: string;
}
