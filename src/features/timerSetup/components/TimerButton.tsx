import { Pressable, Text, StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const { primary } = colors;

export default function TimerButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>START</Text>
      <Text style={styles.buttonText}>00:00:00</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 100,
    borderColor: primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
  },
});
