"use client";

import { splitAtom } from "jotai/utils";
import { Cart, Shoes } from "@/app/lib/definitions";
import { atom, useAtom } from "jotai";

// Store cart product's content
const initialValue =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") ?? "[]")
    : [];

const cardValuesAtom = atom<Cart>(initialValue as Cart);

const priceAtom = atom<string>((get) =>
  get(cardValuesAtom)
    .reduce((acc, item) => +item.price * item.quantity + acc, 0)
    .toFixed(2)
);

export const usePriceAtom = () => {
  const [price] = useAtom(priceAtom);
  return price;
};

export const cardAtomsAtom = splitAtom(cardValuesAtom);

const addOrIncreaseCartAtom = atom(null, (get, set, product: Shoes) => {
  const oldCardValues = get(cardValuesAtom);
  const exists = oldCardValues.find((value) => value.id === product.id);
  let newCardValues: Cart;

  if (exists) {
    newCardValues = oldCardValues.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    set(cardValuesAtom, newCardValues);
  } else {
    newCardValues = [...oldCardValues, { ...product, quantity: 1 }];
    set(cardValuesAtom, newCardValues);
  }
  localStorage.setItem("cart", JSON.stringify(newCardValues));
});

const decreaseOrRemoveCartAtom = atom(
  null,
  (
    get,
    set,
    { productID, remove }: { productID: number; remove?: boolean }
  ) => {
    const oldCardValues = get(cardValuesAtom);
    const exists = oldCardValues.find((value) => value.id === productID);
    let newCardValues: Cart;

    if (!exists) {
      console.error(`No item with ${productID} found`);
      return;
    }

    if (remove || exists.quantity - 1 <= 0) {
      newCardValues = oldCardValues.filter((item) => item.id !== productID);
      window.dispatchEvent(
        new CustomEvent("onremovecartitem", { detail: productID })
      );
    } else {
      newCardValues = oldCardValues.map((item) =>
        item.id === productID ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
    set(cardValuesAtom, newCardValues);

    localStorage.setItem("cart", JSON.stringify(newCardValues));
  }
);

export const useDecreaseCartQuantity = (id: number) => {
  const [, writeValue] = useAtom(decreaseOrRemoveCartAtom);

  const decreaseItemQuantity = (remove?: boolean) => {
    writeValue({ productID: id, remove });
  };

  return decreaseItemQuantity;
};

export const useAddToCart = (shoes: Shoes): (() => void) => {
  const [, writeValue] = useAtom(addOrIncreaseCartAtom);

  const addToCart = () => {
    writeValue(shoes);
  };

  return addToCart;
};

export const useCardsAtoms = () => {
  const [cardsAtoms] = useAtom(cardAtomsAtom);
  return cardsAtoms;
};

export const _useAtom = useAtom;
