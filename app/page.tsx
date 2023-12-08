import { Suspense } from "react";
import Card from "@/app/ui/card"
import CardProducts from "@/app/ui/product/list";
import CartItems from "@/app/ui/cart/list";

export default function Home() {
  return (
    <main className="z-10 relative overflow-y-auto h-full lg:flex lg:justify-center items-center gap-x-10">
      <Card heading="Our Products" type="products">
        <Suspense fallback={<div>Loading</div>}>
          <CardProducts />
        </Suspense>
      </Card>
      <Card heading="Your Cart" type="cart">
        <CartItems />
      </Card>
    </main>
  );
}
