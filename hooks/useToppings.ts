import { useEffect, useState } from "react";
import { listToppings } from "@/src/graphql/queries";
import { Topping } from "@/types/order";
import { generateClient } from "@aws-amplify/api";

export function useToppings() {
  const [toppings, setToppings] = useState<Topping[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const client = generateClient();

  useEffect(() => {
    async function fetchToppings() {
      try {
        setLoading(true);
        const result: any = await client.graphql({
          query: listToppings,
          variables: {},
        });
        console.log(result);
        const items = result?.data?.listToppings?.items || [];
        setToppings(items);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    }
    fetchToppings();
  }, []);

  return {
    toppings,
    loading,
    error,
  };
}
