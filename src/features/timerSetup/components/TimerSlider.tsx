import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

type Props = {
  primary: string;
  accent: string;
};

export default function TimerSlider({ primary, accent }: Props) {
  return (
    <Slider
      style={styles.slider}
      minimumValue={15}
      maximumValue={60}
      step={5}
      minimumTrackTintColor={accent}
      maximumTrackTintColor="#000000"
      thumbTintColor={primary}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    width: 280,
    height: 70,
  },
});
