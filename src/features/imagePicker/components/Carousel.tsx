import { FlatList, View } from "react-native";
import ArtCard from "./ArtCard";
import { dimensions } from "../../../constants/dimensions";
import { Artwork } from "@/types/types";
import { getArtworkData } from "../api/dataFetcher";

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

  return (
    <FlatList
      data={cards.filter((card) => card.title && card.title !== "fallback img")}
      renderItem={({ item }) => (
        <ArtCard
          artwork={item}
          chosenArtwork={chosenArtwork}
          onPress={handleChooseActive}
        />
      )}
      keyExtractor={(artwork, index) => `${index}${artwork.image_id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: gap }} />}
    />
  );
}
