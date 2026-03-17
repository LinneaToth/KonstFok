import { useReducer } from "react";
import { TimerContextType, TimerState, TimerAction } from "@/types/types";
import { initialValues } from "@/constants/fallbacks";

export const timerReducer = (
  state: TimerState,
  action: TimerAction,
): TimerState => {
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
      return {
        ...state,
        chosenArtwork: action.id ?? initialValues.chosenArtwork,
      };

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
    newStatus: "FINISHED" | "WORKING" | "ONHOLD" | "READY",
  ) => {
    dispatch({ type: "SETSTATUS", status: newStatus });
  };

  const setArtwork = (id: number) => {
    dispatch({ type: "SETARTWORK", id: id });
  };

  const reset = () => {
    dispatch({ type: "SETTIME", time: initialValues.goalTime });
    dispatch({ type: "SETSTATUS", status: initialValues.status });
    dispatch({ type: "SETARTWORK", id: initialValues.chosenArtwork });
  };

  const chosenArtwork = state.chosenArtwork;
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
