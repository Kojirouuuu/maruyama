import { View, Text, Pressable } from "react-native";
import { riceSizes } from "@/constants/riceSizes";

type RiceSize = (typeof riceSizes)[number]["value"];

interface Props {
  selected: RiceSize;
  onSelect: (value: RiceSize) => void;
}

export function RiceSizeSelector({ selected, onSelect }: Props) {
  return (
    <View>
      <Text className="font-semibold">ライスサイズを選択</Text>
      <View className="flex-row gap-2">
        {riceSizes.map((size) => (
          <Pressable
            key={size.value}
            onPress={() => onSelect(size.value)}
            className={`px-4 py-2 rounded ${
              selected === size.value ? "bg-yellow-400" : "bg-gray-200"
            }`}
          >
            <Text>{size.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
