import { useContext } from "react";
import { Text } from "@/components/ui/text";
import ProductsContext from "@/contexts/products/Products.context";
import { FlatList } from "react-native";
import { ProductCard } from "@/components";

export default function Products() {
  const { products } = useContext(ProductsContext);

  return (
    <FlatList
      data={products}
      renderItem={(product) => <ProductCard item={product.item} />}
    />
  );
}
