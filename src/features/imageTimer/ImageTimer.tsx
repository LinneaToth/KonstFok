import { ImageBackground, StyleSheet } from "react-native";

export default function ImageTimer({ image }) {
  return <ImageBackground source={image} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
