import { ActivityIndicator } from "react-native";
import { colors } from "@/constants/colors";

export default function Loading() {
  const { accent } = colors;

  return <ActivityIndicator size="large" color={accent} />;
}
