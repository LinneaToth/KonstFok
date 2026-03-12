import { ImageBackground, StyleSheet } from "react-native";

type Props = {
  image: {
    uri: string;
  };
};

export default function ImageTimer({ image }: Props) {
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
