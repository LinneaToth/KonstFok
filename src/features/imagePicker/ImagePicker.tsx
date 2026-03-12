import { getRandomImgByCategories } from "./api/dataUtils";
import Carousel from "./components/Carousel";
import ArtSearch from "./components/ArtSearch";
import { View, StyleSheet } from "react-native";
import { useEffect, useReducer, useState } from "react";
import { Artwork } from "@/types/types";
import { categories } from "@/constants/settings";
import { fallbackCards } from "@/constants/fallbacks";

export default function ImagePicker() {
  //Cards for the random tab
  const [categoryRand, setCategoryRand] = useState(fallbackCards);

  //Cards for the random tab
  const [searchCards, setSearchCards] = useState(null);

  //Search input
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const populateCards = async (cat: string[]) => {
      const categorizedCards: Artwork[] = await getRandomImgByCategories(cat);
      setCategoryRand(categorizedCards);
    };
    populateCards(categories);
  }, []);

  return (
    <View style={styles.container}>
      <ArtSearch />
      <Carousel cards={categoryRand} />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
