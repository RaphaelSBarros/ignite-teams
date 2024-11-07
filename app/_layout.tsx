import { SplashScreen, Stack } from "expo-router";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@/components/Loading";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  {
    !fontsLoaded && <Loading />;
  }

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Stack>
          <Stack.Screen
            name="(screens)/index"
            options={{ headerShown: false }}
          />
        </Stack>
      </ThemeProvider>
    );
  }
}
