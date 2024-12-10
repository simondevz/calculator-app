import { Text, View } from "dripsy";
import ThemeBtn from "./themeBtn";

export default function TopBar() {
  return (
    <View>
      <View>
        <Text>calc</Text>
      </View>

      <View>
        <ThemeBtn />
      </View>
    </View>
  );
}
