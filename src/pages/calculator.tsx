import { SafeAreaView } from "dripsy";
import TopBar from "../components/topBar";
import Input from "../components/input";
import KeyPad from "../components/keypad";

export default function Calculator() {
  return (
    <SafeAreaView>
      <TopBar />
      <Input />
      <KeyPad />
    </SafeAreaView>
  );
}
