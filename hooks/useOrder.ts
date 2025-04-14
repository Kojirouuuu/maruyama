import { createOrder } from "@/src/graphql/mutations";
import { generateClient } from "@aws-amplify/api";
import { useState } from "react";
import { useOrderStore } from "@/store/orderStore";
import { Topping, RiceSize, Sauce, OrderItemInput } from "@/types/order";

const client = generateClient();

export function useOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const { orderData, clearOrder } = useOrderStore();

  const submitOrder = async (
    riceSize: RiceSize,
    sauce: Sauce,
    selectedToppings: Topping[]
  ) => {
    try {
      setIsLoading(true);
      const input = {
        userId: orderData.userId,
        status: "PENDING",
        paymentStatus: "UNPAID",
        paymentMethod: orderData.paymentMethod,
        takeoutMethod: orderData.takeoutMethod,
        pickupTime: orderData.pickupTime,
        totalPrice: orderData.totalPrice,
        items: orderData.items.map(
          (item: {
            menuItemId: string;
            quantity: number;
            price: number;
            riceSize: RiceSize;
            gram: number;
            sauce: Sauce;
            toppings: Topping[];
          }) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            priceAtOrder: item.price,
            riceSize: item.riceSize,
            gram: item.gram,
            sauce: item.sauce,
            toppings: selectedToppings.map((t) => ({ toppingId: t.id })),
          })
        ),
      };
      await client.graphql({
        query: createOrder,
        variables: { input },
      });
      clearOrder();
      alert("注文が完了しました");
    } catch (error) {
      console.error("注文エラー", error);
      alert("注文に失敗しました。もう一度試してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return { submitOrder, isLoading };
}
