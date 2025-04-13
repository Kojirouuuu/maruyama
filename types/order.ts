// トッピング型
export interface Topping {
  id: string;
  name: string;
  price: number;
}

// ライスサイズ型
export type RiceSize = "small" | "medium" | "large";

// ソース型
export type Sauce = "garlic" | "ponzu" | "demi" | "salt" | "none";

// 注文アイテム型
export interface OrderItemInput {
  menuItemId: string;
  quantity: number;
  price: number;
  riceSize: RiceSize;
  gram: number;
  sauce: Sauce;
  toppings: Topping[];
}

// フル注文データ型（Zustandで持つ想定）
export interface OrderInput {
  userId: string;
  items: OrderItemInput[];
  paymentMethod: "CASH" | "CREDIT_CARD" | "MOBILE_PAYMENT";
  takeoutMethod: "BAG" | "GIFT_WRAP" | "NONE";
  totalPrice: number;
  pickupTime: string;
}
