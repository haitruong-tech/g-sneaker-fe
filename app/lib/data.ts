import { Shoes } from "@/app/lib/definitions";

const baseURL = process.env.BASE_URL;

export function fetchProducts(): Promise<Shoes[]> {
  return fetch(`${baseURL}/api/v1/products`, { next: { revalidate: 1 } })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
