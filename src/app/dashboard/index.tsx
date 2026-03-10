import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { dimensions } from "../../constants/dimensions";
import ImagePicker from "../../features/imagePicker/ImagePicker";
import TimerSetup from "../../features/timerSetup/TimerSetup";

const { primary, background } = colors;
const { gap, padding } = dimensions;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KonstFok</Text>
      <Text style={styles.text}>
        Frilägg konst med din fokustid. Låt slumpen styra eller sök själv fram
        ett valfritt verk!
      </Text>
      <ImagePicker />
      <TimerSetup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: gap,
    padding: padding,
  },
  text: {
    color: primary,
  },
});
