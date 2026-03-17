import { StyleSheet, View } from "react-native";
import Button from "@/ui/Button";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Button
        type="small"
        onPress={() => {
          return;
        }}>
        random
      </Button>
      <Button
        disabled={true}
        type="small"
        onPress={() => {
          return;
        }}>
        search
      </Button>
      <Button
        disabled={true}
        type="small"
        onPress={() => {
          return;
        }}>
        favorites
      </Button>
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
