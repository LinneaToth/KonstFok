import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";
import { StyleSheet, Text, View } from "react-native";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Text>RANDOM</Text>
      <Text>SEARCH</Text>
    </View>
  );
}

const { cardBackground } = colors;
const { gap } = dimensions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 20,
    width: 300,
    paddingHorizontal: 30,
    backgroundColor: cardBackground,
  },
});
