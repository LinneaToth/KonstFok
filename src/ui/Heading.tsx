import { StyleSheet, Text, Image, View } from "react-native";
import { typography } from "@/constants/typography";
import { colors } from "@/constants/colors";

type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/KLogo.png")}
        style={styles.img}
      />
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
}

const { headingSize } = typography;
const { cardBackground } = colors;

const styles = StyleSheet.create({
  heading: {
    fontSize: headingSize,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    backgroundColor: cardBackground,
    marginHorizontal: "auto",
    padding: 25,
  },
  img: {
    width: 40,
    height: 40,
  },
});
