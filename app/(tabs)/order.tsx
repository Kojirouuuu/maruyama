import { View, Text, ScrollView, Button } from "react-native";
import { RiceSizeSelector } from "@/components/form/RiceSizeSelector";
import { SauceSelector } from "@/components/form/SauceSelector";
import { ToppingSelector } from "@/components/form/ToppingSelector";
import { useState } from "react";
import { useOrder } from "@/hooks/useOrder";
import { RiceSize, Sauce, Topping } from "@/types/order";

export default function OrderScreen() {
  const [riceSize, setRiceSize] = useState<RiceSize>("medium");
  const [sauce, setSauce] = useState<Sauce>("none");
  const [toppings, setToppings] = useState<Topping[]>([]);
  const { submitOrder, isLoading } = useOrder();

  return (
    <ScrollView className="p-4 bg-white">
      <Text className="text-xl font-bold mb-2">お持ち帰り注文</Text>

      <RiceSizeSelector selected={riceSize} onSelect={setRiceSize} />
      <SauceSelector selected={sauce} onSelect={setSauce} />
      <ToppingSelector selected={toppings} onSelect={setToppings} />

      <Button
        title={isLoading ? "注文中..." : "注文する"}
        onPress={() => submitOrder(riceSize, sauce, toppings)}
        disabled={isLoading}
      />
    </ScrollView>
  );
}
