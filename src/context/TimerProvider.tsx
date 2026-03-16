import { createContext } from "react";
import { useTimerReducer } from "./timerReducer";
import { TimerContextType } from "@/types/types";
import { initContext } from "@/constants/fallbacks";

export const timerContext = createContext<TimerContextType>(initContext);

//TimerContext provides the entire app with state for timer and chosen artwork

type Props = {
  children: React.ReactNode;
};

export default function TimerProvider({ children }: Props) {
  const timerValue = useTimerReducer();
  return (
    <timerContext.Provider value={timerValue}>{children}</timerContext.Provider>
  );
}
