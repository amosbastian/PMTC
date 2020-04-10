interface TeamFormValues {
  id?: number;
  bans: string[];
  picks: string[];
  players: string[];
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
}

export interface ThreadCreatorFormValues {
  lolEsports: string;
  gamepedia: string;
  liquipedia: string;
  context: string;
  event?: number;
  games: GameFormValues[];
}
