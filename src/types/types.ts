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
  iiif_url: string;
  website_url: string;
  description: string;
  artwork_type_title: string;
};

export type TimerContextType = {
  tick: () => void;
  reset: () => void;
  setTime: (time: number) => void;
  setStatus: (status: "WORKING" | "FINISHED" | "ONHOLD" | "READY") => void;
  setArtwork: (id: number) => void;
  chosenArtwork: number;
  status: string;
  remainingTime: number;
  goalTime: number;
};
