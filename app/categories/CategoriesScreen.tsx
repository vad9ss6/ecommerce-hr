import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

import { Text } from "@/components/ui/text";

import { useCategories } from "./hooks";
import { Box } from "@/components/ui/box";
import { useRouter } from "expo-router";
import { useContext } from "react";
import ProductsContext from "@/contexts/products/Products.context";

export default function CategoriesScreen() {
  const productContext = useContext(ProductsContext);
  const { isLoading, categories } = useCategories();
  const router = useRouter();

  if (isLoading) {
    return (
      <Box style={styles.containerLoader}>
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <FlatList
      data={categories}
      renderItem={(category) => (
        <TouchableWithoutFeedback
          onPress={() => {
            productContext.setProducts(category.item.data);
            router.navigate("/products");
          }}
        >
          <Box style={styles.container}>
            <ImageBackground
              style={styles.image}
              imageStyle={{ resizeMode: "cover" }}
              source={{ uri: category.item?.webImageUrl ?? "" }}
            >
              <Box style={styles.overlay}>
                <Text style={styles.text}>{category.item?.name}</Text>
              </Box>
            </ImageBackground>
          </Box>
        </TouchableWithoutFeedback>
      )}
    />
  );
}

const styles = StyleSheet.create({
  containerLoader: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    height: 360,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
