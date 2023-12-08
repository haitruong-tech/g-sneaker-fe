import Image from "next/image";
import React from "react";
import Price from "./cart/price";

const Card = ({
  heading,
  children,
  type,
}: {
  heading: string;
  children: React.ReactNode;
  type: "products" | "cart";
}) => {
  return (
    <div className="card">
      <div className="relative z-10 h-full flex flex-col">
        <Image
          src="/assets/nike.png"
          width={248}
          height={129}
          className="w-16"
          alt="Nike Logo"
        />
        <div className="flex justify-between">
          <h1 className="heading">{heading}</h1>
          {type === "cart" && <Price />}
        </div>
        {children}
      </div>
      <div className="card-circle"></div>
    </div>
  );
};

export default Card;
