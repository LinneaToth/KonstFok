import { StyleSheet, Text, Image, View } from "react-native";
import { typography } from "@/constants/typography";
import { colors } from "@/constants/colors";
import { useFonts } from "@expo-google-fonts/gudea/useFonts";
import { Gudea_400Regular } from "@expo-google-fonts/gudea";

type Props = {
  text: string;
  logo?: boolean;
};

export default function Heading({ text, logo = false }: Props) {
  const [fontsLoaded] = useFonts({
    Gudea_400Regular,
  });

  return (
    <View style={styles.container}>
      {logo && (
        <Image
          source={require("../../assets/img/KLogo.png")}
          style={styles.img}
        />
      )}
      <Text style={[styles.heading, fontsLoaded && styles.fontLoaded]}>
        {text}
      </Text>
    </View>
  );
}

const { cardBackground } = colors;
const { headingSize } = typography;

const styles = StyleSheet.create({
  heading: {
    fontSize: headingSize,
  },
  fontLoaded: {
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
