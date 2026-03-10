import Carousel from "./components/Carousel";

const cards = [
  { id: "kortEtt", title: "kortEtt" },
  { id: "kortTvå", title: "kortTvå" },
  { id: "kortTre", title: "kortTre" },
];

export default function ImagePicker() {
  return <Carousel cards={cards} />;
}
