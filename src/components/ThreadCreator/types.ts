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

export interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Champion {
  id: string;
  name: string;
  image: ChampionImage;
}
