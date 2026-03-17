import ImagePicker from "../features/imagePicker/ImagePicker";
import TimerSetup from "../features/timerSetup/TimerSetup";
import Heading from "@/ui/Heading";
import ViewContainer from "@/ui/ViewContainer";

export default function App() {
  return (
    <ViewContainer>
      <Heading text="konstfok" logo={true} />
      <ImagePicker />
      <TimerSetup />
    </ViewContainer>
  );
}
