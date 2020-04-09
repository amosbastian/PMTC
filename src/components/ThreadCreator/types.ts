interface TeamFormValues {
  name: string;
  bans: string[];
  picks: string[];
  players: string[];
  gold: string;
  towers: string;
}

interface GameFormValues {
  team1: TeamFormValues;
  team2: TeamFormValues;
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
  event: string[];
  games: GameFormValues[];
}
