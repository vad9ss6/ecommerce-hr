import axios from "axios";

const { EXPO_APP_API_URL } = process.env;

const VERSION = "v1";
const PLATFORM = "ecommerce";
console.log("EXPO_APP_API_URL", EXPO_APP_API_URL);
export const client = axios.create({
  baseURL: `https://api.halterranch.com/${VERSION}/${PLATFORM}`,
  headers: {
    "Content-Type": "application/json",
  },
});
