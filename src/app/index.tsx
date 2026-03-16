import ImagePicker from "../features/imagePicker/ImagePicker";
import TimerSetup from "../features/timerSetup/TimerSetup";
import Heading from "@/ui/Heading";
import ViewContainer from "@/ui/ViewContainer";

export default function App() {
  return (
    <ViewContainer>
      <Heading text="konstFok" />
      <ImagePicker />
      <TimerSetup />
    </ViewContainer>
  );
}
