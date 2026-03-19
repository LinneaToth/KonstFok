import { StyleSheet, Text, Image, View } from "react-native";
import { typography } from "@/constants/typography";
import { colors } from "@/constants/colors";

type Props = {
  text: string;
  logo?: boolean;
};

export default function Heading({ text, logo = false }: Props) {
  return (
    <View style={styles.container}>
      {logo && (
        <Image
          source={require("../../assets/img/KLogo.png")}
          style={styles.img}
        />
      )}
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
}

const { cardBackground } = colors;
const { headingSize } = typography;

const styles = StyleSheet.create({
  heading: {
    fontSize: headingSize,
    fontFamily: "Gudea_400Regular",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    backgroundColor: cardBackground,
    alignSelf: "center",
    padding: 25,
  },
  img: {
    width: 40,
    height: 40,
  },
});
