import {
  useQuery,
  QueryKey,
  QueryFunction,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

type QueryType<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  options?: UseQueryOptions<T, AxiosError>;
};

export function useApiQuery<T>({
  queryKey,
  queryFn,
  options,
}: QueryType<T>): UseQueryResult<T, AxiosError> {
  return useQuery<T, AxiosError, T>({ queryKey, queryFn, ...options });
}
