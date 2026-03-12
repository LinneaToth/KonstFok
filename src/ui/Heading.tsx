import { StyleSheet, Text } from "react-native";
import { typography } from "@/constants/typography";

type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return <Text style={styles.heading}>{text}</Text>;
}

const { headingSize } = typography;

const styles = StyleSheet.create({
  heading: {
    fontSize: headingSize,
    fontWeight: "bold",
  },
});
