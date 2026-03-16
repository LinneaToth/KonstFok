import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import TimerProvider from "@/context/TimerProvider";

//Safe area as described in: https://appandflow.github.io/react-native-safe-area-context/usage

export default function Layout() {
  return (
    <TimerProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              statusBarHidden: false,
              statusBarStyle: "dark",
              contentStyle: { paddingTop: 20 },
              animation: "fade",
            }}
          />

          <Stack.Screen
            name="timer"
            options={{
              headerShown: false,
              statusBarHidden: false,
              statusBarStyle: "dark",
              contentStyle: { paddingTop: 20 },
              animation: "fade",
            }}
          />

          {/*Adding a modal on top of the screen, as described in: https://docs.expo.dev/router/advanced/modals/*/}
          <Stack.Screen
            name="detailsModal"
            options={{
              presentation: "modal",
              headerTitle: "Artwork details",
              statusBarHidden: true,

              contentStyle: { paddingTop: 20 },
              animation: "slide_from_left",
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </TimerProvider>
  );
}
