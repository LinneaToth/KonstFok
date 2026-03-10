import { FlatList, View } from "react-native";
import ArtCard from "./ArtCard";
import { dimensions } from "../../../constants/dimensions";

type Props = {
  cards: {
    id: string;
    title: string;
  }[];
};

export default function Carousel({ cards }: Props) {
  const { gap } = dimensions;

  return (
    <FlatList
      data={cards}
      renderItem={({ item }) => <ArtCard title={item.title} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: gap }} />}
    />
  );
}
