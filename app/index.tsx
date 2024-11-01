import Groups from "@/components/Groups";
import theme from "@/theme";
import { ThemeProvider } from "styled-components/native";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
