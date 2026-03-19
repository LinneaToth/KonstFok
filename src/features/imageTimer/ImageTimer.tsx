import { useContext, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { timerContext } from "@/context/TimerProvider";
import { secondsToTime } from "@/utils/timeLogic";
import { useArtworkImageUrl } from "@/api/dataHooks";
import BackBtn from "./components/BackBtn";
import { colors } from "@/constants/colors";
import { dimensions } from "@/constants/dimensions";
import Loading from "@/ui/Loading";
import { useTimer } from "./hooks/useTimer";
import CounterCover from "./components/CounterCover";

export default function ImageTimer() {
  const { remainingTime, goalTime, status, setStatus, tick, chosenArtwork } =
    useContext(timerContext);
  const router = useRouter();
  const [error, setError] = useState(false);
  const coverHeight = (remainingTime / goalTime) * 100;
  const imgUrl = useArtworkImageUrl(chosenArtwork, setError);

  useTimer(tick, status, setStatus);

  const handleBackBtnPress = () => {
    setStatus("ONHOLD");
    router.back(); //replaced .navigate("/") with back; this way the index screen doesn't remount and reload images
  };

  if (error || !imgUrl) {
    return (
      <View style={styles.box}>
        {error ? (
          <Text style={styles.errorText}>failed to load image</Text>
        ) : (
          <Loading />
        )}
        <BackBtn handleBackBtnPress={handleBackBtnPress}>go back</BackBtn>
      </View>
    );
  }

  return (
    <ImageBackground source={{ uri: imgUrl }} style={styles.image}>
      <CounterCover height={coverHeight} />
      <View style={styles.box}>
        <Text style={[styles.timeText]}>{secondsToTime(remainingTime)}</Text>
        <BackBtn handleBackBtnPress={handleBackBtnPress}>go back</BackBtn>
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
    fontFamily: "GoogleSansCode_300Light",
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
  errorText: {
    fontSize: 20,
    color: primary,
    textAlign: "center",
    width: "50%",
    fontFamily: "GoogleSansCode_300Light",
  },
});
