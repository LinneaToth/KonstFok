import { View, StyleSheet } from "react-native";
import { useEffect, useState, useContext } from "react";
import {
  getRandomImgByCategories,
  getOnlyPaintings,
} from "../../api/dataUtils";
import { keywordSearch, getArtworkData } from "@/api/dataFetcher";
import { categories } from "@/constants/settings";
import { fallbackCards } from "@/constants/fallbacks";
import { timerContext } from "@/context/TimerProvider";
import { dimensions } from "@/constants/dimensions";
import { Artwork, TabTypes } from "@/types/types";
import Carousel from "./components/Carousel";
import ArtSearch from "./components/ArtSearch";
import Tabs from "./components/Tabs";
import Favorites from "./components/Favorites";
import Loading from "@/ui/Loading";

//THIS COMPONENT NEEDS SOME TLC & USEREDUCER, SORRY ABOUT THE MESS D:

export default function ImagePicker() {
  const { setArtwork, chosenArtwork } = useContext(timerContext);
  const [activeTab, setActiveTab] = useState<TabTypes>("random");

  //Cards for the random tab
  const [categoryRand, setCategoryRand] = useState(fallbackCards);
  //Cards for the search tab
  const [categorySearch, setCategorySarch] = useState<Artwork[]>([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //random cards are populated on mount
  useEffect(() => {
    const populateCards = async (cat: string[]) => {
      const categorizedCards: (Artwork | undefined)[] =
        await getRandomImgByCategories(cat);

      setCategoryRand(
        categorizedCards.filter((card): card is Artwork => card !== undefined), //Type predicate. If function returns true, the "card is Artwork" part tells TS that it can safely assume that anything returned by the filter is an artwork
      );
    };
    populateCards(categories);
  }, []);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchSubmitted(true);
    const idArray = await keywordSearch(query);
    const artworks = await getArtworkData(idArray);
    setCategorySarch(getOnlyPaintings(artworks));
    setIsLoading(false);
  };

  const handleTabChange = (tab: TabTypes) => {
    if (tab === "search" && activeTab === "search") {
      //if we're already on search tab and press it again we'll start over with the search. Might have to develop, not super intuitive.
      setSearchSubmitted(false);
    }
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <Tabs activeTab={activeTab} onPress={handleTabChange} />
      {activeTab === "search" && !searchSubmitted && (
        <ArtSearch onSearch={handleSearch} />
      )}
      {activeTab === "search" && searchSubmitted && isLoading && (
        <View style={styles.loadingView}>
          <Loading />
        </View>
      )}
      {activeTab === "favorites" && <Favorites />}
      {activeTab !== "favorites" && !isLoading && (
        <Carousel
          cards={activeTab === "search" ? categorySearch : categoryRand}
          chosenArtwork={chosenArtwork}
          setArtwork={setArtwork}
        />
      )}
    </View>
  );
}

const { gap } = dimensions;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 200,
    gap: gap * 2,
  },
  loadingView: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
