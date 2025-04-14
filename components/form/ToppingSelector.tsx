// components/form/RiceSizeSelector.tsx
import { View, Text, Pressable } from "react-native";
import { Topping } from "@/types/order";

interface Props {
  toppings: Topping[]; // DBから取得したトッピング
  selected: Topping[]; // 選択中のトッピング
  onChange: (value: Topping[]) => void; // トッピング選択時のコールバック
}

export function ToppingSelector({ toppings, selected, onChange }: Props) {
  const handlePress = (topping: Topping) => {
    const alreadySelected = selected.some((t) => t.id === topping.id);
    if (alreadySelected) {
      onChange(selected.filter((t) => t.id !== topping.id));
    } else {
      onChange([...selected, topping]);
    }
  };
  return (
    <View>
      <Text className="font-semibold">トッピングを選択</Text>
      <View className="flex-row gap-2 mt-2">
        {toppings.map((topping) => {
          const isSelected = selected.some((st) => st.id === topping.id);
          return (
            <Pressable
              key={topping.id}
              onPress={() => handlePress(topping)}
              className={`px-4 py-2 rounded ${
                isSelected ? "bg-yellow-400" : "bg-gray-200"
              }`}
            >
              <Text>{topping.name}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
