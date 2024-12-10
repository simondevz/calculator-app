// theme.ts
import { makeTheme } from "dripsy";
const darkColors = {
  $background: "black",
  $text: "white",
};
const theme = makeTheme({
  colors: darkColors,
});
type MyTheme = typeof theme;
declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
const lightColors: typeof darkColors = {
  $text: "black",
  $background: "white",
};
const themeLight = {
  ...theme,
  colors: lightColors,
};
export { theme, themeLight };
