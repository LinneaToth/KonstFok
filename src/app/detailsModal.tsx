import { StyleSheet, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Loading from "@/ui/Loading";

import { getArtworkData } from "@/api/dataFetcher";
import { useEffect, useState } from "react";
import { Artwork } from "@/types/types";
import { typography } from "@/constants/typography";
import { removeTags } from "@/api/dataUtils";
import Heading from "@/ui/Heading";
import ViewContainer from "@/ui/ViewContainer";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";

export default function Modal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [artwork, setArtwork] = useState<null | Artwork>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getArtwork = async () => {
      setError(false);
      const fetchedArtwork = await getArtworkData(Number(id));
      if (fetchedArtwork && fetchedArtwork.length > 0) {
        setArtwork(fetchedArtwork[0]);
      } else {
        setError(true);
      }
    };
    getArtwork();
  }, [id]);

  if (error) {
    return (
      <ViewContainer>
        <Text style={styles.standard}>Failed to load artwork details</Text>
      </ViewContainer>
    );
  }
  if (!artwork)
    return (
      <ViewContainer>
        <Loading />
      </ViewContainer>
    );

  const description = artwork.description
    ? artwork.description
    : "No description available";

  const artist = artwork.artist_title
    ? artwork.artist_title
    : "No information available";

  return (
    <ViewContainer>
      <ScrollView style={styles.container}>
        <Heading text={artwork.title} />
        <Text style={styles.standard}>Artist: {artist}</Text>
        <Text style={styles.standard}>
          {removeTags(description)}
          {/*The description returned contains <>-tags, tried native webview. It looked awful so I use a method to clean it up with regexp*/}
        </Text>
      </ScrollView>
    </ViewContainer>
  );
}

const { standardSize } = typography;
const { cardBackground } = colors;
const { padding, width, gap } = dimensions;

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  standard: {
    fontSize: standardSize,
    lineHeight: standardSize * 1.5,
    backgroundColor: cardBackground,
    padding: padding,
    width: width,
    alignSelf: "center",
    marginTop: gap,
  },
});
