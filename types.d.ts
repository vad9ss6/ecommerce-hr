type CatalogType = "has_items" | "has_subcategories" | "empty" | "root";

type Product = {
  id: string;
  name: string;
  category_id: string;
  price: number;
  sku_id: string;
  price_sign: string;
  sku_number: string;
  skus: Sku[];
  inventory_type: InventoryType;
  club_member_discount: number;
  club_member_price: number;
  web_image_url: string | null;
  mobile_image_url: string | null;
  web_hover_image_url: string | null;
  category_options: CategoryOption[] | null;
  description: string;
  in_stock: boolean;
  members_only: string | null;
};

type Catalog = {
  id: string;
  name: string;
  type: CatalogType;
  members_only: boolean;
  pickup_only: boolean;
  paid_delivery_only: boolean;
  disable_club_member_discount: boolean;
  description?: string;
  products: Product[];
  web_image_url?: string | null;
};

type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  page_size: number;
};
