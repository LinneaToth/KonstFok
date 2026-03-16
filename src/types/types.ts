export type ArtworkData = {
  _score: number;
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  timestamp: string;
};

export type KeywordData = {
  data: ArtworkData[];
};

export type Artwork = {
  id: number;
  title: string;
  image_id: string;
  is_public_domain: boolean;
  description: string;
  artwork_type_title: string;
};

export type TimerContextType = {
  tick: () => void;
  reset: () => void;
  setTime: (time: number) => void;
  setStatus: (status: "WORKING" | "FINISHED" | "ONHOLD" | "READY") => void;
  setArtwork: (artwork: number) => void;
  chosenArtwork: number;
  status: string;
  remainingTime: number;
  goalTime: number;
};

export type TimerState = {
  status: string;
  goalTime: number;
  curTime: number;
  chosenArtwork: number;
};

export type TimerAction = {
  type: string;
  time?: number;
  status?: string;
  id?: number;
};
