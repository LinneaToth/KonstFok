import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { timerContext } from "@/context/TimerProvider";
import { useContext, useCallback, useRef, useState, useEffect } from "react";
import { secondsToTime } from "@/utils/timeLogic";
import Button from "@/ui/Button";
import { getImgUrl } from "../../api/dataUtils";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";
import { getArtworkData } from "../../api/dataFetcher";
import Loading from "@/ui/Loading";
import { useFonts } from "@expo-google-fonts/gudea/useFonts";
import { GoogleSansCode_300Light } from "@expo-google-fonts/google-sans-code/300Light";
export default function ImageTimer() {
  const { remainingTime, goalTime, status, setStatus, tick, chosenArtwork } =
    useContext(timerContext);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const router = useRouter();
  const coverHeight = (remainingTime / goalTime) * 100;
  const [fontsLoaded] = useFonts({
    GoogleSansCode_300Light,
  });

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
        if (statusRef.current === "WORKING")
          tickRef.current(); //function tick() is stored in the current-object
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

  const handleBackBtnPress = () => {
    setStatus("ONHOLD");
    router.navigate("/");
  };

  if (!imageUrl) {
    return (
      <View style={styles.box}>
        <Loading />
        <Button onPress={handleBackBtnPress} type="small">
          GO BACK
        </Button>
      </View>
    );
  }

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.image}>
      <View style={[styles.cover, { height: `${coverHeight}%` }]}></View>
      <View style={styles.box}>
        <Text style={[styles.timeText, fontsLoaded && styles.fontLoaded]}>
          {secondsToTime(remainingTime)}
        </Text>
        <Button onPress={handleBackBtnPress} type="small">
          go back
        </Button>
      </View>
    </ImageBackground>
  );
}
const { backgroundTransparent, primary } = colors;
const { padding } = dimensions;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 20,
    color: primary,
    textAlign: "center",
    zIndex: 5,
    width: "50%",
    textAlignVertical: "center",
  },
  fontLoaded: {
    fontFamily: "GoogleSansCode_300Light",
  },
  cover: {
    zIndex: 3,
    backgroundColor: backgroundTransparent,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
    backgroundColor: backgroundTransparent,
    padding: padding,
    alignSelf: "center",
  },
});
