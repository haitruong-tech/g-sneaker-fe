import { Shoes } from "./definitions";

const baseURL = process.env.BASE_URL;

export function fetchProducts(): Promise<Shoes[]> {
  return fetch(`${baseURL}/api/v1/products`, { cache: "no-cache" })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
