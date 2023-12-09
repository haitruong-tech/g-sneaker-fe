import React from "react";
import { fetchProducts } from "@/app/lib/data";
import CardItem from "@/app/ui/product/item";

const CardProducts = async () => {
  const products = await fetchProducts();

  return (
    <div className="mt-5 grow overflow-y-auto overflow-x-hidden no-scrollbar">
      {products?.map((product, index) => (
        <CardItem key={product.id} product={product} priority={index === 0} />
      ))}
    </div>
  );
};

export default CardProducts;
