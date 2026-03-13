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

const { primary, background } = colors;

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 100,
    borderColor: primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: background,
  },
  buttonText: {
    fontSize: 30,
  },
});
