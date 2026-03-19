import { TextInput, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";

type Props = {
  onSearch: (query: string) => void;
};

export default function ArtSearch({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.fontsLoaded}>
        enter keyword to search for images:
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={setQuery}
        value={query}
        onSubmitEditing={() => onSearch(query)}
        returnKeyType="search"
      />
    </View>
  );
}

const { cardBackground } = colors;
const { padding, gap } = dimensions;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    width: 250,
  },
  container: {
    height: 150,
    backgroundColor: cardBackground,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: padding,
    flexDirection: "column",
    gap: gap,
  },
  fontsLoaded: {
    fontFamily: "Gudea_400Regular",
  },
});
