import { useContext, useCallback, useRef, useState, useEffect } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import { StyleSheet, View, Image, Text } from "react-native";
import TimerSlider from "./components/TimerSlider";
import TimerButton from "./components/TimerButton";
import { colors } from "../../constants/colors";
import { timerContext } from "@/context/TimerProvider";
import { getImgUrl } from "../../api/dataUtils";
import { getArtworkData } from "../../api/dataFetcher";
import { secondsToTime } from "@/utils/timeLogic";
import { useFonts } from "@expo-google-fonts/gudea/useFonts";
import { GoogleSansCode_300Light } from "@expo-google-fonts/google-sans-code/300Light";

export default function TimerSetup() {
  const { chosenArtwork, setTime, remainingTime, goalTime, status, setStatus } =
    useContext(timerContext);
  const router = useRouter();
  const { accent, primary } = colors;
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    GoogleSansCode_300Light,
  });

  const goalTimeFormatted = secondsToTime(goalTime);
  const curTimeFormatted = secondsToTime(remainingTime);

  useEffect(() => {
    const getArtwork = async () => {
      if (chosenArtwork) {
        const [fetchedArtwork] = await getArtworkData(chosenArtwork);
        if (fetchedArtwork?.image_id) {
          setImgUrl(getImgUrl(fetchedArtwork.image_id));
        }
      }
    };
    getArtwork();
  }, [chosenArtwork]);

  //Only way to use status as a reference in the useFocusEffect was to circumvent it with a useRef, otherwise status would go stale inside the useCallback closure and not update. The difference with statusRef.current is that it points towards an object (in which the content can be changed), which persists between renders. I put derived state into it. Thanks, React.
  const statusRef = useRef(status);
  statusRef.current = status;

  //Similar to useEffect. Runs on focus: If we come from the timer screen, we need to pause. If not, we're ready to go!
  //Added useCallback to get rid of infinite loop.
  useFocusEffect(
    useCallback(() => {
      if (statusRef.current === "ONHOLD") return;
      if (statusRef.current === "WORKING") setStatus("ONHOLD");
      else setStatus("READY");
    }, []),
  );

  const handleTimerBtnPress = () => {
    setStatus("WORKING");
    router.navigate("/timer");
  };

  const handleSliderChange = (value: number) => {
    setTime(value);
    setStatus("READY");
  };

  return (
    <View style={styles.container}>
      {imgUrl && (
        <Image style={styles.img} source={{ uri: imgUrl }} resizeMode="cover" />
      )}
      {!imgUrl && <View style={styles.img} />}
      <Text style={[styles.timer, fontsLoaded && styles.fontLoadedTimer]}>
        {status === "READY" ? goalTimeFormatted : curTimeFormatted}
      </Text>
      <TimerSlider
        accent={accent}
        primary={primary}
        onChange={handleSliderChange}
        value={goalTime}
      />
      <TimerButton
        status={statusRef.current as "READY" | "WORKING" | "ONHOLD" | "DONE"}
        onPress={handleTimerBtnPress}
      />
    </View>
  );
}

const { cardBackground, accent, backgroundTransparent } = colors;

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cardBackground,
    gap: 15,
    paddingVertical: 25,
  },
  img: {
    width: 250,
    height: 250,
    borderColor: accent,
    borderWidth: 1,
  },
  timer: {
    marginTop: -75,
    backgroundColor: backgroundTransparent,
    fontSize: 20,
    width: 250,
    textAlign: "center",
  },
  fontLoadedTimer: {
    fontFamily: "GoogleSansCode_300Light",
  },
});
