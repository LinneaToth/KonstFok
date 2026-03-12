import { StyleSheet, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Loading from "@/ui/Loading";

import { getArtworkData } from "@/features/imagePicker/api/dataFetcher";
import { useEffect, useState } from "react";
import { Artwork } from "@/types/types";
import { typography } from "@/constants/typography";
import { removeTags } from "@/features/imagePicker/api/dataUtils";
import Heading from "@/ui/heading";
import ViewContainer from "@/ui/ViewContainer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Modal() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [artwork, setArtwork] = useState<null | Artwork>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArtwork = async () => {
      const fetchedArtwork = await getArtworkData(Number(id));
      setArtwork(fetchedArtwork[0]);
      setIsLoading(false);
    };
    getArtwork();
  }, []);

  const artworkDescription = artwork?.description;

  //add image and a heart icon for favoriting it

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {isLoading && <Loading />}

        {!isLoading && (
          <>
            <Heading
              text={!artwork ? "Artwork title - loading" : artwork.title}
            />

            <Text style={styles.standard}>
              {!artwork
                ? "Artwork description - loading"
                : removeTags(artworkDescription)}
              {/*The description returned contains <>-tags, tried native webview. It looked awful so I use a method to clean it up with regexp*/}
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const { headingSize, standardSize } = typography;

const styles = StyleSheet.create({
  container: {
    height: 400,
  },

  standard: {
    fontSize: standardSize,
    lineHeight: standardSize * 1.5,
  },
});
