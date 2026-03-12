import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../constants/colors";
import { dimensions } from "../../../constants/dimensions";
import ImagePicker from "../../../features/imagePicker/ImagePicker";
import TimerSetup from "../../../features/timerSetup/TimerSetup";
import ViewContainer from "@/ui/ViewContainer";
import Heading from "@/ui/heading";
import { SafeAreaView } from "react-native-safe-area-context";

const { primary, background } = colors;
const { gap, padding } = dimensions;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewContainer>
        <Heading text="konstFok" />
        <Text style={styles.text}>
          Frilägg konst med din fokustid. Låt slumpen styra eller sök själv fram
          ett valfritt verk!
        </Text>
        <ImagePicker />
        <TimerSetup />
      </ViewContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: primary,
  },
});
