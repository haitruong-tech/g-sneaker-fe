"use client";

import { usePriceAtom } from "@/app/lib/atom";
import React from "react";

const Price = () => {
  const price = usePriceAtom();
  return <p className="heading">${price}</p>;
};

export default Price;
