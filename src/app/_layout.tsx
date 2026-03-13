import { Stack } from "expo-router";
import TimerProvider from "@/context/TimerProvider";

export default function Layout() {
  return (
    <TimerProvider>
      <Stack>
        {/*Navigation for my two tabs; dashboard/home and the timer screen.*/}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/*Adding a modal on top of the screen, as described in: https://docs.expo.dev/router/advanced/modals/*/}
        <Stack.Screen
          name="Modal"
          options={{
            presentation: "modal",
            headerTitle: "Artwork details",
            statusBarHidden: true,
            contentStyle: { paddingTop: 20 },
            animation: "slide_from_left",
          }}
        />
      </Stack>
    </TimerProvider>
  );
}
