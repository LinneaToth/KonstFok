import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/*Navigation for my two tabs; dashboard/home and the timer screen. () creates a group*/}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

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
  );
}
