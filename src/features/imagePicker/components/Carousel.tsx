import { FlatList, View } from "react-native";
import { router } from "expo-router";
import ArtCard from "./ArtCard";
import { dimensions } from "../../../constants/dimensions";
import { Artwork } from "@/types/types";

type Props = {
  cards: Artwork[];
  chosenArtwork: number;
  setArtwork: (artwork: number) => void;
};

export default function Carousel({ cards, chosenArtwork, setArtwork }: Props) {
  const { gap } = dimensions;

  const handleChooseActive = (id: number) => {
    setArtwork(id);
  };

  const handleViewInfo = (infoId: number | string) => {
    router.push({ pathname: "/detailsModal", params: { id: infoId } }); //Router push adds a stack/view on top of everything else, which should be intact underneath. Params will be appended after ?, which tells the routing that this is just data parameters, not actual routing. I can name the keys whatever I want. That is my understanding, based on what I read in the expo routing docs.
  };

  return (
    <FlatList
      data={cards.filter((card) => card.title && card.title !== "fallback img")}
      renderItem={({ item }) => (
        <ArtCard
          artwork={item}
          chosenArtwork={chosenArtwork}
          handleSelect={handleChooseActive}
          handleViewInfo={handleViewInfo}
        />
      )}
      keyExtractor={(artwork, index) => `${index}${artwork.image_id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: gap }} />}
    />
  );
}
