import { Text, View, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "grey" }}>I don't exist yet 💔</Text>
    </View>
  );
}

const { padding, gap } = dimensions;
const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: colors.cardBackground,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: padding,
    flexDirection: "column",
    gap: gap,
  },
});
