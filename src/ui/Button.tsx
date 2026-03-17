import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "@/constants/colors";
import { useFonts } from "@expo-google-fonts/gudea/useFonts";
import { Gudea_400Regular } from "@expo-google-fonts/gudea";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  type?: "big" | "small";
  disabled?: boolean;
};

export default function Button({
  children,
  onPress,
  type = "big",
  disabled = false,
}: Props) {
  const [fontsLoaded] = useFonts({
    Gudea_400Regular,
  });

  return (
    <Pressable
      style={[
        styles.button,
        type === "small" && { height: 30, width: 95 },
        disabled === true && { opacity: 0.5 },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          fontsLoaded && styles.fontLoaded,
          type === "big" && { fontSize: 25 },
        ]}>
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
  },
  fontLoaded: {
    fontFamily: "Gudea_400Regular",
  },
});
