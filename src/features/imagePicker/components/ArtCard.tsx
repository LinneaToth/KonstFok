import { Artwork } from "@/types/types";
import { View, StyleSheet, ImageBackground, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getImgUrl } from "../../../api/dataUtils";
import { colors } from "@/constants/colors";
import Loading from "@/ui/Loading";

type Props = {
  artwork: Artwork;
  handleSelect: (id: number) => void;
  chosenArtwork: number;
  handleViewInfo: (infoId: number | string) => void;
};
const { primary, accent, backgroundTransparent } = colors;

export default function ArtCard({
  artwork,
  handleSelect,
  chosenArtwork,
  handleViewInfo,
}: Props) {
  const { image_id, id, title } = artwork;
  const imgUrl = getImgUrl(image_id);

  const isSelected = chosenArtwork === id;

  return (
    <ImageBackground
      source={{ uri: imgUrl }}
      resizeMode="cover"
      style={styles.img}
      imageStyle={{ opacity: isSelected ? 1 : 0.7 }}>
      <Pressable onPress={title === "LOADING" ? null : () => handleSelect(id)}>
        <View style={styles.card}>
          {title === "LOADING" && <Loading />}
          {title !== "LOADING" && (
            <>
              <Pressable
                style={styles.infoIcon}
                onPress={() => handleViewInfo(id)}>
                <Ionicons name="information-sharp" size={30} color={accent} />
              </Pressable>
            </>
          )}
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    borderColor: primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
  },
  infoIcon: {
    position: "absolute",
    backgroundColor: backgroundTransparent,
    height: 30,
    width: 30,
    bottom: 8,
    right: 8,
  },
});
