import { ImageBackground, StyleSheet, Text } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { timerContext } from "@/context/TimerProvider";
import { useContext, useCallback, useRef } from "react";
import { secondsToTime } from "@/utils/timeLogic";
import Button from "@/ui/Button";

type Props = {
  image: {
    uri: string;
  };
};

export default function ImageTimer({ image }: Props) {
  const { remainingTime, goalTime, status, setStatus, tick } =
    useContext(timerContext);

  const router = useRouter();

  //useRef adds an object (current) that persists between renders. The path is static, but the content is happily mutable. Therefore I can put derived state in it, and circumvent the problem with state going stale inside the useCallback; due to the function's closure (it takes a snapshot of whatever it needs when created and then never changes)
  const tickRef = useRef(tick);
  tickRef.current = tick;

  const statusRef = useRef(status);
  statusRef.current = status;

  useFocusEffect(
    useCallback(() => {
      const countDownInterval = setInterval(() => {
        if (statusRef.current === "WORKING") tickRef.current();
        else {
          clearInterval(countDownInterval);
          setStatus("DONE");
        }
      }, 1000);

      return () => {
        clearInterval(countDownInterval);
        setStatus("ONHOLD");
      };
    }, []),
  );

  const handleSettingsBtnPress = () => {
    setStatus("ONHOLD");
    router.navigate("/dashboard");
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.timeText}>
        Remaining time: {secondsToTime(remainingTime)}{" "}
      </Text>
      <Button onPress={handleSettingsBtnPress}>
        <Text style={styles.buttonText}>GO BACK</Text>
      </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
  },
  timeText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
  },
});
