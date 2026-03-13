import { useReducer } from "react";
import { TimerContextType } from "@/types/types";

type TimerState = {
  status: string;
  goalTime: number;
  curTime: number;
  selectedArtwork: number;
};

type TimerAction = {
  type: string;
  time?: number;
  status?: string;
  id?: number;
};

const initialValues: TimerState = {
  status: "READY",
  goalTime: 1500,
  curTime: 1500,
  selectedArtwork: 92385,
};

export const timerReducer = (state: TimerState, action: TimerAction) => {
  switch (action.type) {
    case "TICK":
      if (state.curTime === 0) return { ...state, status: "FINISHED" };
      return { ...state, curTime: state.curTime - 1 };

    case "SETTIME":
      return {
        ...state,
        curTime: action.time ?? 1500,
        goalTime: action.time ?? 1500,
      };

    case "SETSTATUS":
      return { ...state, status: action.status ?? "ONHOLD" };

    case "SETARTWORK":
      return { ...state, selectedArtwork: action.id ?? 92385 };

    default:
      return state;
  }
};

export const useTimerReducer = (): TimerContextType => {
  const [state, dispatch] = useReducer(timerReducer, initialValues);

  const tick = () => {
    dispatch({ type: "TICK" });
  };

  const setTime = (newTime: number) => {
    dispatch({ type: "SETTIME", time: newTime });
  };

  const setStatus = (
    newStatus: "FINISHED" | "WORKING" | "ONHOLD" | "READY" | "DONE",
  ) => {
    dispatch({ type: "SETSTATUS", status: newStatus });
  };

  const setArtwork = (newArtwork: number) => {
    dispatch({ type: "SETARTWORK", id: newArtwork });
  };

  const reset = () => {
    dispatch({ type: "SETTIME", time: initialValues.goalTime });
    dispatch({ type: "SETSTATUS", status: initialValues.status });
    dispatch({ type: "SETARTWORK", id: initialValues.selectedArtwork });
  };

  const chosenArtwork = state.selectedArtwork;
  const status = state.status;
  const remainingTime = state.curTime;
  const goalTime = state.goalTime;

  return {
    tick,
    setTime,
    setStatus,
    setArtwork,
    reset,
    chosenArtwork,
    status,
    remainingTime,
    goalTime,
  };
};
