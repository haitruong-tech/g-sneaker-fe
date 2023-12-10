"use client";

import { useCartPrice } from "@/app/lib/atom";
import React from "react";

const Price = () => {
  const price = useCartPrice();
  return (
    <p
      className="heading animate-fade-in-left"
      style={{ animationDelay: "750ms" }}
      aria-live="polite"
      aria-label="Cart Total Price"
    >
      {`$${price}`}
    </p>
  );
};

export default Price;
