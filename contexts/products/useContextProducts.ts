import { useState } from "react";

export const useContextProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return { value: { products, setProducts } };
};
