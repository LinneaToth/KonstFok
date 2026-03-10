import { StyleSheet, View } from "react-native";
import TimerSlider from "./components/TimerSlider";
import TimerButton from "./components/TimerButton";
import { colors } from "../../constants/colors";

export default function TimerSetup() {
  const { accent, primary } = colors;

  return (
    <View style={styles.container}>
      <TimerSlider accent={accent} primary={primary} />
      {/*add time state and set time state*/}
      <TimerButton /> {/*add time state*/}
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
