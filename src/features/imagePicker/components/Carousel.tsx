import { FlatList, View } from "react-native";
import ArtCard from "./ArtCard";
import { dimensions } from "../../../constants/dimensions";
import { Artwork } from "@/types/types";

type Props = {
  cards: Artwork[];
};

export default function Carousel({ cards }: Props) {
  const { gap } = dimensions;

  return (
    <FlatList
      data={cards.filter((card) => card.title && card.title !== "fallback img")}
      renderItem={({ item }) => <ArtCard artwork={item} />}
      keyExtractor={(artwork) => String(artwork.id)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: gap }} />}
    />
  );
}
