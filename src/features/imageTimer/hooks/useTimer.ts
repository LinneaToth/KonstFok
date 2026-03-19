import { Status } from "@/types/types";
import { useRef, useCallback } from "react";
import { useFocusEffect } from "expo-router";

export const useTimer = (
  tick: () => void,
  status: Status,
  setStatus: (arg: Status) => void,
) => {
  //useRef adds an object (current) that persists between renders. The path is static, but the content is happily mutable. Therefore I can put derived state in it, and circumvent the problem with state going stale inside the useCallback; due to the function's closure (it takes a snapshot of whatever it needs when created and then never changes)
  const tickRef = useRef(tick);
  tickRef.current = tick;

  const statusRef = useRef(status);
  statusRef.current = status;

  //Tried useEffect but it didn't always perform as intended, which apparently has to do with the lifecycle of screens. useFocusEffect instead reacts to focus/blur.
  useFocusEffect(
    useCallback(() => {
      const countDownInterval = setInterval(() => {
        if (statusRef.current === "WORKING")
          tickRef.current(); //function tick() is stored in the current-object.
        else {
          clearInterval(countDownInterval);
          setStatus("FINISHED");
        }
      }, 1000);

      return () => {
        //Cleanup function that runs when the user unfocuses the screen.
        clearInterval(countDownInterval);
        setStatus("ONHOLD");
      };
    }, []),
  );
};
