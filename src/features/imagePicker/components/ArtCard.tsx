import { Text, View, StyleSheet } from "react-native";

type Props = {
  title: string;
};

export default function ArtCard({ title }: Props) {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
