import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "@expo-google-fonts/gudea/useFonts";
import { Gudea_400Regular } from "@expo-google-fonts/gudea";
import { GoogleSansCode_300Light } from "@expo-google-fonts/google-sans-code";
import { Stack } from "expo-router";
import TimerProvider from "@/context/TimerProvider";
import Loading from "@/ui/Loading";

//Safe area as described in: https://appandflow.github.io/react-native-safe-area-context/usage

export default function Layout() {
  const [fontsLoaded] = useFonts({ Gudea_400Regular, GoogleSansCode_300Light });

  if (!fontsLoaded) return <Loading />;

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
              presentation: "modal", //changed to modal to keep index intact underneath
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
