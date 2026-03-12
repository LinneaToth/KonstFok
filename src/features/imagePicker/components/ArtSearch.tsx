import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function ArtSearch() {
  const onChangeText = (text: string) => {};
  return <TextInput style={styles.input} onChangeText={onChangeText} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 250,
  },
});
