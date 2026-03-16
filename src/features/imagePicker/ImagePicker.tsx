import { getRandomImgByCategories } from "./api/dataUtils";
import Carousel from "./components/Carousel";
import ArtSearch from "./components/ArtSearch";
import Tabs from "./components/Tabs";
import { View, StyleSheet } from "react-native";
import { useEffect, useState, useContext, use } from "react";
import { Artwork } from "@/types/types";
import { categories } from "@/constants/settings";
import { fallbackCards } from "@/constants/fallbacks";
import { timerContext } from "@/context/TimerProvider";
import { dimensions } from "@/constants/dimensions";

export default function ImagePicker() {
  const { setArtwork, chosenArtwork } = useContext(timerContext);

  //Cards for the random tab
  const [categoryRand, setCategoryRand] = useState(fallbackCards);

  //Cards for the random tab
  const [searchCards, setSearchCards] = useState(null);

  //Search input
  const [searchInput, setSearchInput] = useState("");

  const [search, setSearch] = useState(false);

  useEffect(() => {
    const populateCards = async (cat: string[]) => {
      const categorizedCards: (Artwork | undefined)[] =
        await getRandomImgByCategories(cat);

      setCategoryRand(
        categorizedCards.filter((card): card is Artwork => card !== undefined),
      );
    };
    populateCards(categories);
  }, []);

  return (
    <View style={styles.container}>
      {search && <ArtSearch />}
      <Tabs />
      <Carousel
        cards={categoryRand}
        chosenArtwork={chosenArtwork}
        setArtwork={setArtwork}
      />
    </View>
  );
}
const { gap } = dimensions;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 200,
  },
});
