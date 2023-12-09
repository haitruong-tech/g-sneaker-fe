"use client";

import { useGetItemInCart, useIncreaseCartItem } from "@/app/lib/atom";
import { Shoes } from "@/app/lib/definitions";
import Image from "next/image";
import { useEffect, useState } from "react";

const AddToCartButton = ({ product }: { product: Shoes }) => {
  const increaseOrAddToCart = useIncreaseCartItem();
  const [item] = useGetItemInCart(product);
  const isAddedToCart = item.quantity > 0;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  // Fix "Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server."
  if (!domLoaded) return <div>Loading DOM...</div>;

  return !isAddedToCart ? (
    // TODO: save to localStorage
    <p className="add-to-cart-btn" onClick={() => increaseOrAddToCart(product)}>
      Add To Cart
    </p>
  ) : (
    <div className="bg-Yellow rounded-full p-3">
      <Image
        src="/assets/check.png"
        width={24}
        height={24}
        alt="check"
        className="animate-fade-in"
      />
    </div>
  );
};

export default AddToCartButton;
