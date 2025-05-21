export const normalizeCategories = (categories?: Catalog[]) => {
  if (!categories) return [];

  return categories.map(({ id, name, web_image_url, products }) => ({
    id,
    name,
    webImageUrl: web_image_url,
    data: products,
  }));
};
