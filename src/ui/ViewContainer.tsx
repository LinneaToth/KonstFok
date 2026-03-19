import { StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode; //Thanks for the type Stackoverflow.
};

const { background } = colors;
const { gap } = dimensions;

export default function ViewContainer({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    justifyContent: "center",
    flex: 1,
    height: "100%",
    gap: gap * 2,
  },
});
