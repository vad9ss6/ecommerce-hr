import React, { createContext } from "react";

const ProductsContext = createContext<{
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ProductsContext.Provider;

export default ProductsContext;
