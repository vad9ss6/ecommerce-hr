import request from "@/api/request";
import { CATALOG_PATH } from "@/api/endpoints";

export default class Categories {
  static readonly getCollection = () => {
    return request<PaginatedResponse<Catalog>>({
      url: CATALOG_PATH,
      method: "get",
    });
  };
}
