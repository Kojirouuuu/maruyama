// components/form/RiceSizeSelector.tsx
import { View, Text, Pressable } from "react-native";
import { sauces } from "@/constants/sauces";

type Sauce = (typeof sauces)[number]["value"];

interface Props {
  selected: Sauce;
  onSelect: (value: Sauce) => void;
}

export function SauceSelector({ selected, onSelect }: Props) {
  return (
    <View>
      <Text className="font-semibold">ソースを選択</Text>
      <View className="flex-row gap-2 mt-2">
        {sauces.map((sauce) => (
          <Pressable
            key={sauce.value}
            onPress={() => onSelect(sauce.value)}
            className={`px-4 py-2 rounded ${
              selected === sauce.value ? "bg-yellow-400" : "bg-gray-200"
            }`}
          >
            <Text>{sauce.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
