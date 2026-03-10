import ViewContainer from "@/ui/ViewContainer";
import ImageTimer from "@/features/imageTimer/ImageTimer";

const image = {
  uri: "https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg",
};

export default function Timer() {
  return (
    <ViewContainer>
      <ImageTimer image={image} />
    </ViewContainer>
  );
}
