import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  type?: "big" | "small";
  active?: boolean;
};

export default function Button({
  children,
  onPress,
  type = "big",
  active = true,
}: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        type === "small" && { height: 30, width: 95 },
        active === false && { opacity: 0.5 },
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, type === "big" && { fontSize: 25 }]}>
        {children}
      </Text>
    </Pressable>
  );
}

const { primary, cardBackground } = colors;

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    borderColor: primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: cardBackground,
    zIndex: 5,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: "Gudea_400Regular",
  },
});
