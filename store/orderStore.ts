import { create } from "zustand";
import { OrderInput } from "@/types/order";

interface OrderState {
  orderData: OrderInput;
  setOrder: (data: OrderInput) => void;
  clearOrder: () => void;
}

const initialOrderData: OrderInput = {
  userId: "",
  items: [],
  paymentMethod: "CASH",
  takeoutMethod: "BAG",
  totalPrice: 0,
  pickupTime: new Date().toISOString(),
};

export const useOrderStore = create<OrderState>((set) => ({
  orderData: initialOrderData,
  setOrder: (data: OrderInput) => set({ orderData: data }),

  clearOrder: () => set({ orderData: initialOrderData }),
}));
