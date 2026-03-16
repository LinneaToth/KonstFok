import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

type Props = {
  primary: string;
  accent: string;
  onChange: (value: number) => void;
  value: number;
};

export default function TimerSlider({
  primary,
  accent,
  onChange,
  value,
}: Props) {
  return (
    <Slider
      style={styles.slider}
      minimumValue={300}
      maximumValue={3600}
      step={300}
      minimumTrackTintColor={accent}
      maximumTrackTintColor="#000000"
      thumbTintColor={primary}
      value={value}
      onValueChange={(newTime) => onChange(newTime)}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    width: 225,
    height: 70,
  },
});
