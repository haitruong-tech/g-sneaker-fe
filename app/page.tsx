import { Suspense } from "react";
import Card from "@/app/ui/card";
import CardProducts from "@/app/ui/product/list";
import CartItems from "@/app/ui/cart/list";
import { Provider } from "jotai";

export default function Home() {
  return (
    <main className="overflow-y-auto h-full lg:flex lg:justify-center items-center gap-x-10">
      <Provider>
        <Card heading="Our Products" type="products">
          <Suspense fallback={<div>Loading</div>}>
            <CardProducts />
          </Suspense>
        </Card>
        <Card heading="Your Cart" type="cart">
          <CartItems />
        </Card>
      </Provider>
    </main>
  );
}
