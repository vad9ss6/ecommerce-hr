import { ProductCard } from "@/components";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import {
  FlatList,
  ListRenderItemInfo,
  SectionListRenderItemInfo,
} from "react-native";

type Props = {
  category: SectionListRenderItemInfo<
    Product,
    {
      id: string;
      name: string;
      webImageUrl: string | null | undefined;
      data: Product[];
    }
  >;
};

export const Categories = ({ category }: Props) => {
  const { name, data } = category.section ?? {};

  return (
    <Box>
      {/* <Text>{name}</Text> */}
      {/* <FlatList
        // key={2}
        data={data}
        // numColumns={2}
        // columnWrapperClassName="gap-2"
        // contentContainerClassName="gap-2 max-w-[960px] mx-auto w-full"
        renderItem={(product) => <></>}
      /> */}
    </Box>
  );
};
