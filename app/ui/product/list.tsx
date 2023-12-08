import React from "react";
import { fetchProducts } from "../../lib/data";
import CardItem from "./item";

const CardProducts = async () => {
  const products = await fetchProducts();

  return (
    <div className="mt-5 grow overflow-y-auto overflow-x-hidden no-scrollbar">
      {products?.map((product) => (
        <CardItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CardProducts;
