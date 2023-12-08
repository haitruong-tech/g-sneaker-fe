"use client";

import Image from "next/image";
import { Cart, Shoes } from "@/app/lib/definitions";
import { useAddToCart } from "@/app/lib/atom";
import { useEffect, useState } from "react";

const CardItem = (product: Shoes) => {
  const { color, description, image, name, price } = product;

  const addToCart = useAddToCart(product);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const listen = (e?: Event) => {
      if (e && "detail" in e && product.id === e.detail)
        setIsAddedToCart(false);
      else {
        const isAddedToCart = (
          JSON.parse(localStorage.getItem("cart") ?? "[]") as Cart
        ).find((item) => item.id === product.id);
        setIsAddedToCart(Boolean(isAddedToCart));
      }
    };

    listen();

    window.addEventListener("onremovecartitem", listen);
  }, []);

  return (
    <div className="[&:not(:first-child)]:mt-20">
      <div className="rounded-[28px] py-8" style={{ backgroundColor: color }}>
        <Image
          src={image}
          width={499}
          height={499}
          alt={name}
          className="-rotate-[24deg] -translate-x-4"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="mt-4 text-sm leading-6 opacity-60">{description}</p>
        <div className="mt-6 flex justify-between items-center h-[52px]">
          <p className="text-lg font-bold">${price}</p>
          {!isAddedToCart ? (
            <p
              className="add-to-cart-btn"
              onClick={() => {
                addToCart();
                setIsAddedToCart(true);
              }}
            >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
