import { Pressable, Text } from "dripsy";

export default function Key({ value }: { value: string }) {
  return (
    <Pressable>
      <Text>{value}</Text>
    </Pressable>
  );
}
