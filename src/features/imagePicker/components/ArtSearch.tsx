import { TextInput, StyleSheet } from "react-native";

export default function ArtSearch() {
  const onChangeText = () => {};
  return <TextInput style={styles.input} onChangeText={onChangeText} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    width: 250,
  },
});
