import { StyleSheet, View } from "react-native";
import Button from "@/ui/Button";
import { TabTypes } from "@/types/types";

type Props = {
  activeTab: "random" | "search" | "favorites";
  onPress: (tab: TabTypes) => void;
};

export default function Tabs({ activeTab, onPress }: Props) {
  const tabs: TabTypes[] = ["random", "search", "favorites"];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          type="small"
          onPress={() => onPress(tab)}
          active={tab === activeTab}>
          {tab}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    width: 300,
  },
});
