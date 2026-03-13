//Component created to avoid repeating the same code for styling in different places of the app
//There is a library for dealing with safe areas, https://appandflow.github.io/react-native-safe-area-context/, I just did it with margins here

import { View, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";

type Props = {
  children: React.ReactNode; //Thanks for the type Stackoverflow.
};

const { background } = colors;
const { gap, padding } = dimensions;

export default function ViewContainer({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: gap,
    padding: padding,
    paddingTop: 50,
    height: "100%",
  },
});
