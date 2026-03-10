import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <Stack initialRouteName="dashboard/index">
      {" "}
      <StatusBar style="auto" /> {/*Phone's watch, notifications, battery etc*/}
    </Stack>
  );
}
