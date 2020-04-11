import { PlayersInputPlayerData } from "./PlayersInput/fragments";
import { TeamsInputTeamsData } from "./TeamsInput/fragments";
import { EventInputEventData } from "./EventInput/fragments";

interface TeamFormValues {
  team: TeamsInputTeamsData;
  bans: string[];
  picks: string[];
  players: PlayersInputPlayerData[];
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
