import { Box } from "./ui/box";
import { Card } from "./ui/card";
import { Heading } from "./ui/heading";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { Center } from "./ui/center";
import { Button, ButtonText } from "./ui/button";
import { getCurrencyString } from "@/helpers";

export const ProductCard = ({ item }: { item: Product }) => {
  const { name, price, club_member_price, web_image_url } = item ?? {};

  const clubPrice = getCurrencyString(club_member_price ?? 0);
  const retailPrice = getCurrencyString(price ?? 0);
  return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Center>
        <Image
          size="xs"
          alt={name}
          source={{
            uri: web_image_url ?? "",
          }}
          className="mb-6 h-[240px] w-[100px] rounded-md"
        />
      </Center>

      <VStack className="mb-2">
        <Heading size="md">{name}</Heading>

        <Text size="sm">{`Club Price: ${clubPrice}`}</Text>
        <Text size="sm">{`Retail Price: ${retailPrice}`}</Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Buy Now
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
};
