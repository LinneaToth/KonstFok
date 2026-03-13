import { useContext, useCallback, useRef } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import { StyleSheet, View } from "react-native";
import TimerSlider from "./components/TimerSlider";
import TimerButton from "./components/TimerButton";
import { colors } from "../../constants/colors";
import { timerContext } from "@/context/TimerProvider";

export default function TimerSetup() {
  const { setTime, remainingTime, goalTime, status, setStatus } =
    useContext(timerContext);
  const router = useRouter();
  const { accent, primary } = colors;

  //Only way to use status as a reference in the useFocusEffect was to circumvent it with a useRef, otherwise status would go stale inside the useCallback closure and not update. The difference with statusRef.current is that it points towards an object (in which the content can be changed), which persists between renders. I put derived state into it. Thanks, React.
  const statusRef = useRef(status);
  statusRef.current = status;

  //Similar to useEffect. Runs on focus: If we come from the timer screen, we need to pause. If not, we're ready to go!
  //Added useCallback to get rid of infinite loop.
  useFocusEffect(
    useCallback(() => {
      if (statusRef.current === "ONHOLD") return;
      if (statusRef.current === "WORKING") setStatus("ONHOLD");
      else setStatus("READY");
    }, []),
  );

  const handleTimerBtnPress = () => {
    setStatus("WORKING");
    router.navigate("/timer");
  };

  const handleSliderChange = (value: number) => {
    setTime(value);
    setStatus("READY");
  };

  return (
    <View style={styles.container}>
      <TimerSlider
        accent={accent}
        primary={primary}
        onChange={handleSliderChange}
        value={goalTime}
      />
      <TimerButton
        goalTime={goalTime}
        curTime={remainingTime}
        status={statusRef.current}
        onPress={handleTimerBtnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
