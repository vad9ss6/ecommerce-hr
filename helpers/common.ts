export const getCurrencyString = (v: string | number) =>
  v.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
