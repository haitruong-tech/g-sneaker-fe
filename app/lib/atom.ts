"use client";

import { atomFamily } from "jotai/utils";
import { CartItem, Shoes } from "@/app/lib/definitions";
import { atom, useAtom, useSetAtom } from "jotai";

// Cart Atoms
const cartItemAtomFamily = atomFamily(
  (cartItem: CartItem) =>
    atom({
      image: "",
      name: "",
      description: "",
      price: "",
      color: "",
      quantity: 0,
      ...cartItem,
    }),
  (a, b) => a.id === b.id
);

const cartItemIDsAtom = atom<Set<number>>(new Set([]));

const cartPriceAtom = atom<string>((get) => {
  return Array.from(get(cartItemIDsAtom))
    .reduce((acc, itemID) => {
      const cartItem = get(cartItemAtomFamily({ id: itemID }));
      return +cartItem.price * cartItem.quantity + acc;
    }, 0)
    .toFixed(2);
});

const increaseCartAtom = atom(null, (get, set, product: Shoes) => {
  const productAtom = cartItemAtomFamily(product);
  const cartItem = get(productAtom);
  set(productAtom, { ...cartItem, quantity: cartItem.quantity + 1 });

  const cartItemIDs = get(cartItemIDsAtom);
  cartItemIDs.add(product.id);
  set(cartItemIDsAtom, new Set(cartItemIDs));
});

const decreaseCartAtom = atom(
  null,
  (get, set, { product, remove }: { product: Shoes; remove?: boolean }) => {
    const productAtom = cartItemAtomFamily(product);
    const cartItem = get(productAtom);
    const quantity = cartItem.quantity - 1;

    if (quantity <= 0 || remove) {
      const cartItemIDs = get(cartItemIDsAtom);
      cartItemIDs.delete(product.id);
      set(cartItemIDsAtom, new Set(cartItemIDs));

      set(productAtom, { ...cartItem, quantity: 0 }); // trigger useAtom(cartItemAtomFamily(product)) change
      cartItemAtomFamily.remove(product);
    } else set(productAtom, { ...cartItem, quantity });
  }
);

// LocalStorage Atom
type Action =
  | { type: "serialize"; callback: (value: string) => void }
  | { type: "deserialize"; value: string };

const serializeAtom = atom(null, (get, set, action: Action) => {
  if (action.type === "serialize") {
    const cartIDs = Array.from(get(cartItemIDsAtom));
    const cartMap: Record<number, CartItem> = {};
    cartIDs.forEach((id) => {
      cartMap[id] = get(cartItemAtomFamily({ id }));
    });
    const obj = {
      cartIDs,
      cartMap,
    };
    action.callback(JSON.stringify(obj));
  } else if (action.type === "deserialize") {
    try {
      const obj = JSON.parse(action.value) as {
        cartIDs: number[];
        cartMap: Record<number, CartItem>;
      };

      if (typeof obj !== "object" || obj === null) {
        throw new Error("Invalid JSON format. Expected an object.");
      }

      if (!Array.isArray(obj.cartIDs)) {
        throw new Error("Invalid cartIDs format. Expected an array.");
      }

      const cartIDsSet = new Set(obj.cartIDs);
      set(cartItemIDsAtom, cartIDsSet);

      obj.cartIDs.forEach((id: number) => {
        if (typeof id !== "number") {
          throw new Error("Invalid cartID format. Expected a number.");
        }

        const cartItem = obj.cartMap[id];

        if (Object.values(cartItem).some((value) => value == null)) {
          throw new Error("Invalid cartItem format.");
        }

        set(cartItemAtomFamily({ id /*, ...cartItem*/ }), cartItem as any);
      });
    } catch (error) {
      if (error instanceof Error)
        console.error("Error parsing or processing JSON:", error.message);
      console.error("Error in serialize atom");
    }
  }
});

// hooks
const storageKey = "cart";

export const useCartPrice = () => useAtom(cartPriceAtom)[0];

export const useGetItemInCart = (product: Shoes) =>
  useAtom(cartItemAtomFamily(product));

export const useIncreaseCartItem = () => {
  const increase = useSetAtom(increaseCartAtom);
  const serialize = useSetAtom(serializeAtom);

  const increaseItem = (item: Shoes) => {
    increase(item);
    serialize({
      type: "serialize",
      callback(value) {
        localStorage.setItem(storageKey, value);
      },
    });
  };

  return increaseItem;
};

export const useDecreaseCartItem = () => {
  const decrease = useSetAtom(decreaseCartAtom);
  const serialize = useSetAtom(serializeAtom);

  const decreaseItem = ({
    product,
    remove,
  }: {
    product: Shoes;
    remove?: boolean;
  }) => {
    decrease({ product, remove });
    serialize({
      type: "serialize",
      callback(value) {
        localStorage.setItem(storageKey, value);
      },
    });
  };

  return decreaseItem;
};

export const useCartIDs = () => useAtom(cartItemIDsAtom);

export const useDeserialize = () => {
  const deserialize = useSetAtom(serializeAtom);

  const deserializeCart = () => {
    deserialize({
      type: "deserialize",
      value: localStorage.getItem(storageKey) ?? "",
    });
  };

  return deserializeCart;
};
