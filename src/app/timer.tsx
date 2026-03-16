import { SafeAreaView } from "react-native-safe-area-context";
import ImageTimer from "@/features/imageTimer/ImageTimer";

const image = {
  uri: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg",
};

//useeffect med en setInterval som drar av återstående tid med dispatch mot reducern
//Cleanup functino för astt stänga av set interval med clearInterval

export default function Timer() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageTimer />
    </SafeAreaView>
  );
}
