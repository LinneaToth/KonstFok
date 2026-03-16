import { Pressable, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

export default function Button({ children, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {children}
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
    fontSize: 30,
  },
});
