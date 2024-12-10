import { theme, themeLight } from "./theme";
import { DripsyProvider } from "dripsy";
import React from "react";
import { useColorScheme } from "react-native";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const colorMode = useColorScheme();
  return (
    <DripsyProvider theme={colorMode === "dark" ? theme : themeLight}>
      {children}
    </DripsyProvider>
  );
}
