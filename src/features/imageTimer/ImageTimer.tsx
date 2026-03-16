import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { timerContext } from "@/context/TimerProvider";
import { useContext, useCallback, useRef, useState, useEffect } from "react";
import { secondsToTime } from "@/utils/timeLogic";
import Button from "@/ui/Button";
import { getImgUrl } from "../imagePicker/api/dataUtils";
import { colors } from "@/constants/colors";
import { getArtworkData } from "../imagePicker/api/dataFetcher";
import Loading from "@/ui/Loading";

export default function ImageTimer() {
  const { remainingTime, goalTime, status, setStatus, tick, chosenArtwork } =
    useContext(timerContext);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();
  const coverHeight = (remainingTime / goalTime) * 100;

  useEffect(() => {
    const getArtwork = async () => {
      if (chosenArtwork) {
        const [artworkData] = await getArtworkData(chosenArtwork);
        if (artworkData?.image_id) {
          setImageUrl(getImgUrl(artworkData.image_id));
        }
      }
    };
    getArtwork();
  }, [chosenArtwork]);

  //useRef adds an object (current) that persists between renders. The path is static, but the content is happily mutable. Therefore I can put derived state in it, and circumvent the problem with state going stale inside the useCallback; due to the function's closure (it takes a snapshot of whatever it needs when created and then never changes)
  const tickRef = useRef(tick);
  tickRef.current = tick;

  const statusRef = useRef(status);
  statusRef.current = status;

  useFocusEffect(
    useCallback(() => {
      const countDownInterval = setInterval(() => {
        if (statusRef.current === "WORKING") tickRef.current();
        else {
          clearInterval(countDownInterval);
          setStatus("FINISHED");
        }
      }, 1000);

      return () => {
        clearInterval(countDownInterval);
        setStatus("ONHOLD");
      };
    }, []),
  );

  const handleSettingsBtnPress = () => {
    setStatus("ONHOLD");
    router.navigate("/");
  };

  if (!imageUrl) {
    return (
      <>
        <Loading />{" "}
        <Button onPress={handleSettingsBtnPress}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </Button>
      </>
    );
  }

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
      <View style={[styles.cover, { height: `${coverHeight}%` }]}></View>
      <Text style={styles.timeText}>
        Remaining time: {secondsToTime(remainingTime)}
      </Text>
      <Button onPress={handleSettingsBtnPress}>
        <Text style={styles.buttonText}>GO BACK</Text>
      </Button>
    </ImageBackground>
  );
}
const { backgroundTransparent } = colors;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
  },
  timeText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    zIndex: 5,
  },
  cover: {
    zIndex: 3,
    backgroundColor: backgroundTransparent,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
});
