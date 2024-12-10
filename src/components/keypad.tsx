import { View } from "dripsy";
import Key from "./keys";

const KEYS = [
  "7",
  "8",
  "9",
  "del",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
];

export default function KeyPad() {
  return (
    <View>
      <View>
        {KEYS.map((key) => (
          <Key key={key} value={key} />
        ))}
      </View>

      <View>
        <Key value="reset" />
        <Key value="=" />
      </View>
    </View>
  );
}
