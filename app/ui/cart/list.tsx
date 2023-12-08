"use client";

import {
  _useAtom,
  useAddToCart,
  useCardsAtoms,
  useDecreaseCartQuantity,
} from "@/app/lib/atom";
import { CartItem } from "@/app/lib/definitions";
import clsx from "clsx";
import { PrimitiveAtom } from "jotai";
import Image from "next/image";
import React, { memo, useState } from "react";

const CartItem = memo(
  ({ atom, index }: { atom: PrimitiveAtom<CartItem>; index?: number }) => {
    const [item] = _useAtom(atom);
    const addToCart = useAddToCart(item);
    const decreaseQuantity = useDecreaseCartQuantity(item.id);
    const baseDelay = (index ?? 0) * 1750;
    const [animateOut, setAnimateOut] = useState(false);

    const decreaseHandler = (remove?: boolean) => {
      if (item.quantity <= 1 || remove) {
        setAnimateOut(true);
        setTimeout(() => {
          setAnimateOut(false);
          decreaseQuantity(remove);
        }, 750);
      } else decreaseQuantity();
    };

    return (
      <div
        className={clsx("flex mt-10 gap-x-8 items-start", {
          "animate-zoom-out": animateOut,
        })}
      >
        <div
          className="rounded-full shrink-0 h-[90px] w-[90px] animate-zoom-in"
          style={{
            backgroundColor: item.color,
            animationDelay: `${baseDelay}ms`,
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
            style={{ animationDelay: `${baseDelay + 750}ms` }}
          >
            {item.name}
          </h2>
          <p
            className="text-lg font-bold mt-2 animate-fade-in-left"
            style={{ animationDelay: `${baseDelay + 1000}ms` }}
          >
            ${item.price}
          </p>
          <div
            className="flex items-center justify-between mt-2 animate-fade-in"
            style={{ animationDelay: `${baseDelay + 1250}ms` }}
          >
            <div className="flex gap-x-3 items-center">
              <div
                className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
                onClick={(e) => decreaseHandler()}
              >
                <Image
                  src="/assets/minus.png"
                  alt="minus"
                  width={8}
                  height={8}
                />
              </div>
              <span>{item.quantity}</span>
              <div
                className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
                onClick={addToCart}
              >
                <Image src="/assets/plus.png" alt="plus" width={8} height={8} />
              </div>
            </div>
            <div
              className="bg-Yellow rounded-full w-[28px] h-[28px] items-center justify-center flex cursor-pointer"
              onClick={(e) => decreaseHandler(true)}
            >
              <Image
                src="/assets/trash.png"
                alt="trash"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CartItem.displayName = "CartItem";

const CartItems = () => {
  const cardsAtoms = useCardsAtoms();
  return (
    <div className="overflow-y-auto no-scrollbar">
      {cardsAtoms.length > 0 ? (
        cardsAtoms.map((atom, index) => (
          <CartItem key={`${atom}`} atom={atom} />
        ))
      ) : (
        <p className="text-lg opacity-60">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartItems;
