import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { secondsToTime } from "@/utils/timeLogic";
import Button from "@/ui/Button";

const { primary } = colors;

type Props = {
  onPress: () => void;
  goalTime: number;
  curTime: number;
  status: "WORKING" | "ONHOLD" | "READY" | "DONE";
};

export default function TimerButton({
  onPress,
  goalTime,
  curTime,
  status,
}: Props) {
  const goalTimeFormatted = secondsToTime(goalTime);
  const curTimeFormatted = secondsToTime(curTime);

  return (
    <Button onPress={onPress}>
      <Text style={styles.buttonText}>
        {status === "ONHOLD" && "RESUME"}
        {status === "READY" && "START"}
      </Text>
      <Text style={styles.buttonText}>
        {status === "READY" ? goalTimeFormatted : curTimeFormatted}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
  },
});
