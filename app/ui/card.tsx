import Image from "next/image";
import React from "react";
import Price from "@/app/ui/cart/price";

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
    <section className="card">
      <div className="card-circle"></div>
      <div className="relative h-full flex flex-col">
        <Image
          src="/assets/nike.png"
          width={248}
          height={129}
          className="w-16 shrink-0"
          alt="Nike Logo"
        />
        <div className="flex justify-between">
          <h1 className="heading">{heading}</h1>
          {type === "cart" && <Price />}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Card;
