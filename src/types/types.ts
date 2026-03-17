//The data that is returned upon a search for a keyword
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

//The data that is returned on a URL with required fields for a particular id
export type Artwork = {
  id: number;
  title: string;
  image_id: string;
  is_public_domain: boolean;
  description: string;
  artwork_type_title: string;
  artist_title: string;
};

export type TimerContextType = {
  tick: () => void;
  reset: () => void;
  setTime: (time: number) => void;
  setStatus: (status: Status) => void;
  setArtwork: (artwork: number) => void;
  chosenArtwork: number;
  status: string;
  remainingTime: number;
  goalTime: number;
};

export type TimerState = {
  status: Status;
  goalTime: number;
  curTime: number;
  chosenArtwork: number;
};

export type TimerAction = {
  type: string;
  time?: number;
  status?: Status;
  id?: number;
};

export type Status = "WORKING" | "FINISHED" | "ONHOLD" | "READY";
