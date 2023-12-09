"use client";

import { useCartPrice } from "@/app/lib/atom";
import React from "react";

const Price = () => {
  const price = useCartPrice();
  return (
    <p
      className="heading animate-fade-in-left"
      style={{ animationDelay: "750ms" }}
    >
      ${price}
    </p>
  );
};

export default Price;
