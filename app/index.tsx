import Groups from "@/components/Groups";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";
import { ActivityIndicator, StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@/components/Loading";
import NewGroup from "@/components/NewGroup";

export default function Home() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
