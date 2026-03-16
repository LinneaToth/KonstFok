import { Artwork } from "@/types/types";
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getImgUrl } from "../api/dataUtils";
import { colors } from "@/constants/colors";
import Loading from "@/ui/Loading";

type Props = {
  artwork: Artwork;
  onPress: (id: number) => void;
  chosenArtwork: number;
};
const { primary, accent, backgroundTransparent } = colors;

export default function ArtCard({ artwork, onPress, chosenArtwork }: Props) {
  const { image_id, id, title } = artwork;
  const imgUrl = getImgUrl(image_id);

  const isSelected = chosenArtwork === id;

  const handleViewInfo = () => {
    router.push({ pathname: "/detailsModal", params: { id: id } }); //Router push adds a stack/view on top of everything else, which should be intact underneath. Params will be appended after ?, which tells the routing that this is just data parameters, not actual routing. I can name the keys whatever I want. That is my understanding, based on what I read in the expo routing docs.
  };

  return (
    <ImageBackground
      source={{ uri: imgUrl }}
      resizeMode="cover"
      style={styles.img}
      imageStyle={{ opacity: isSelected ? 1 : 0.7 }}>
      <Pressable onPress={title === "LOADING" ? null : () => onPress(id)}>
        <View style={styles.card}>
          {title === "LOADING" && <Loading />}
          {title !== "LOADING" && (
            <>
              <Pressable style={styles.infoIcon} onPress={handleViewInfo}>
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
