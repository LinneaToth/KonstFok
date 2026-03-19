import { View, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

type Props = {
  height: number;
};

export default function CounterCover({ height }: Props) {
  return <View style={[styles.cover, { height: `${height}%` }]} />;
}

const { backgroundTransparent } = colors;

const styles = StyleSheet.create({
  cover: {
    zIndex: 3,
    backgroundColor: backgroundTransparent,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});
