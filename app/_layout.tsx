import "@/global.css";
import { Stack, Link } from "expo-router";
import { Badge } from "@/components/ui/badge";
import { BadgeText } from "@/components/ui/badge";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import QueryClientProvider from "@/api/QueryClientProvider";
import { useContextProducts } from "@/contexts";
import ProductsContext from "@/contexts/products/Products.context";
import CartIcon from "@/components/icons/Cart";

import { VStack } from "@/components/ui/vstack";

export default function RootLayout() {
  const { value } = useContextProducts();

  return (
    <GluestackUIProvider mode="light">
      <QueryClientProvider>
        <ProductsContext.Provider value={value}>
          <Stack
            screenOptions={{
              headerShown: true,
              headerRight: () => (
                <Link href="/cart" className="mr-2">
                  <VStack>
                    <CartIcon />

                    <Badge
                      className="z-10 self-end h-[20px] w-[20px] bg-red-600 rounded-full -mt-8 -mr-6"
                      variant="solid"
                    >
                      <BadgeText className="text-white">2</BadgeText>
                    </Badge>
                  </VStack>
                </Link>
              ),
            }}
          >
            <Stack.Screen name="index" options={{ title: "Categories" }} />
            <Stack.Screen name="products" options={{ title: "Products" }} />
            <Stack.Screen name="cart" options={{ title: "Cart" }} />
          </Stack>
        </ProductsContext.Provider>
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
