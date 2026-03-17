import { TimerState, TimerContextType } from "@/types/types";

export const initialValues: TimerState = {
  status: "READY",
  goalTime: 1500,
  curTime: 1500,
  chosenArtwork: 129884,
};

export const initContext: TimerContextType = {
  tick: () => {
    return;
  },
  reset: () => {
    return;
  },
  setTime: () => {
    return;
  },
  setStatus: () => {},
  setArtwork: () => {},
  chosenArtwork: 129884,
  status: "READY",
  remainingTime: 1500,
  goalTime: 1500,
};

export const fallBackImg = () => {
  return {
    id: Math.floor(Math.random() * 10000000),
    title: "fallback img",
    image_id: "fallback img",
    is_public_domain: true,
    description: "fallback img",
    artwork_type_title: "fallback img",
    artist_title: "TOTH",
  };
};

export const fallbackCards = [
  {
    id: 0,
    title: "LOADING",
    image_id: "LOADING",
    is_public_domain: true,
    description: "LOADING",
    artwork_type_title: "Painting",
    artist_title: "TOTH",
  },
  {
    id: 1,
    title: "LOADING",
    image_id: "LOADING",
    is_public_domain: true,
    description: "LOADING",
    artwork_type_title: "Painting",
    artist_title: "TOTH",
  },
  {
    id: 2,
    title: "LOADING",
    image_id: "LOADING",
    is_public_domain: true,
    description: "LOADING",
    artwork_type_title: "Painting",
    artist_title: "TOTH",
  },
];
