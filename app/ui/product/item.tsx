import Image from "next/image";
import { Shoes } from "@/app/lib/definitions";
import AddToCartButton from "./add-to-cart-btn";

const CardItem = ({
  product,
  priority,
}: {
  product: Shoes;
  priority: boolean;
}) => {
  const { color, description, image, name, price } = product;

  return (
    <article className="[&:not(:first-child)]:mt-20">
      <div className="rounded-[28px] py-8" style={{ backgroundColor: color }}>
        <Image
          src={image ?? ""}
          width={499}
          height={499}
          alt={name ?? ""}
          className="-rotate-[24deg] -translate-x-4"
          priority={priority}
        />
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="mt-4 text-sm leading-6 opacity-60">{description}</p>
        <div className="mt-6 flex justify-between items-center h-[52px]">
          <p className="text-lg font-bold">${price}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </article>
  );
};

export default CardItem;
