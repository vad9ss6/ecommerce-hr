import { CategoriesService } from "@/api";
import { useApiQuery } from "@/hooks";
import { useMemo } from "react";
import { normalizeCategories } from "../helpers";

const key = "categories";

export const useCategories = () => {
  const { data, isLoading } = useApiQuery({
    queryKey: [key],
    queryFn: () => CategoriesService.getCollection(),
  });

  const categories = useMemo(() => normalizeCategories(data?.items), [data]);

  return { categories, isLoading };
};
