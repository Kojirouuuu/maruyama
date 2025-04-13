// components/form/RiceSizeSelector.tsx
import { View, Text, Pressable } from "react-native";
import { toppings } from "@/constants/toppings";

type Topping = (typeof toppings)[number]["value"];

interface Props {
  selected: Topping[];
  onSelect: (value: Topping) => void;
}

export function ToppingSelector({ selected, onSelect }: Props) {
  return (
    <View>
      <Text className="font-semibold">トッピングを選択</Text>
      <View className="flex-row gap-2 mt-2">
        {toppings.map((topping) => (
          <Pressable
            key={topping.value}
            onPress={() => onSelect(topping.value)}
            className={`px-4 py-2 rounded ${
              selected.includes(topping.value) ? "bg-yellow-400" : "bg-gray-200"
            }`}
          >
            <Text>{topping.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
