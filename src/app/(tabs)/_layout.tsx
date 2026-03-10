//From the docs, note to self:
//(tab) directory tells Expo router to use the tabs layout
//this file (_layout.tsx) sets the layout for each tab, and defines what their tab button should look like and how it should behave

import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard/index" options={{ headerShown: false }} />
      <Tabs.Screen name="timer/index" options={{ headerShown: false }} />
    </Tabs>
  );
}
