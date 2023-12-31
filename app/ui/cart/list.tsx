"use client";

import {
  useCartIDs,
  useDecreaseCartItem,
  useDeserialize,
  useGetItemInCart,
  useIncreaseCartItem,
} from "@/app/lib/atom";
import clsx from "clsx";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

const CartItem = memo(({ id }: { id: number }) => {
  const [item] = useGetItemInCart({ id });
  const increaseCartItem = useIncreaseCartItem();
  const decreaseCartItem = useDecreaseCartItem();

  const [animateOut, setAnimateOut] = useState(false);

  const decreaseHandler = (remove?: boolean) => {
    if (item.quantity <= 1 || remove) {
      setAnimateOut(true);
      setTimeout(() => {
        setAnimateOut(false);
        decreaseCartItem({ product: item, remove });
      }, 750);
    } else decreaseCartItem({ product: item });
  };

  return (
    <article
      className={clsx("flex mt-10 gap-x-8 items-start", {
        "animate-zoom-out": animateOut,
      })}
      id="cart-item"
    >
      <div
        className="rounded-full shrink-0 h-[90px] w-[90px] animate-zoom-in"
        style={{
          backgroundColor: item.color,
        }}
      >
        <Image
          src={item.image}
          width={90}
          height={90}
          alt={item.name}
          className="-rotate-[24deg] -translate-x-1 -translate-y-4 scale-[1.4]"
        />
      </div>
      <div className="w-full">
        <h2
          className="font-bold text-sm animate-fade-in-left"
          style={{ animationDelay: "750ms" }}
        >
          {item.name}
        </h2>
        <p
          className="text-lg font-bold mt-2 animate-fade-in-left"
          style={{ animationDelay: "1000ms" }}
          aria-label="Product Price"
        >
          {`$${item.price}`}
        </p>
        <div
          className="flex items-center justify-between mt-2 animate-fade-in"
          style={{ animationDelay: "1250ms" }}
        >
          <div className="flex gap-x-3 items-center">
            <button
              className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
              onClick={() => decreaseHandler()}
              aria-label="Subtract from Quantity"
              aria-controls="quantity"
            >
              <Image src="/assets/minus.png" alt="minus" width={8} height={8} />
            </button>
            <span
              aria-live="polite"
              id="quantity"
              aria-label="Quantity"
            >
              {item.quantity}
            </span>
            <button
              className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
              onClick={() => increaseCartItem(item)}
              aria-label="Add to Quantity"
              aria-controls="quantity"
            >
              <Image src="/assets/plus.png" alt="plus" width={8} height={8} />
            </button>
          </div>
          <button
            className="bg-Yellow rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
            onClick={() => decreaseHandler(true)}
            aria-label="Remove Cart Item"
            aria-controls="cart-item"
          >
            <Image src="/assets/trash.png" alt="trash" width={14} height={14} />
          </button>
        </div>
      </div>
    </article>
  );
});

CartItem.displayName = "CartItem";

const CartItems = () => {
  const [ids] = useCartIDs();
  const deserializeCart = useDeserialize();

  useEffect(() => {
    deserializeCart();
  }, []);

  return (
    <div className="overflow-y-auto no-scrollbar grow">
      {ids.size > 0 ? (
        Array.from(ids).map((id) => <CartItem key={id} id={id} />)
      ) : (
        <p className="text-lg opacity-60">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartItems;
