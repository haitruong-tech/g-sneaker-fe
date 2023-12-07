import Card from "./ui/card";
import CardProducts from "./ui/card-products";
import CardItems from "./ui/cart-items";

export default function Home() {
  return (
    <main className="z-10 relative overflow-y-auto h-full lg:flex lg:justify-center items-center gap-x-10">
      <Card heading="Our Products" type="products">
        <CardProducts />
      </Card>
      <Card heading="Your Cart" type="cart">
        <CardItems />
      </Card>
    </main>
  );
}
