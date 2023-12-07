import Image from "next/image";
import React from "react";

const CardProducts = () => {
  return (
    <div className="mt-5 grow overflow-y-auto overflow-x-hidden no-scrollbar">
      {/* card product */}
      <div className="[&:not(:first-child)]:mt-20">
        <div className="bg-[#e1e7ed] rounded-[28px] py-8">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
            width={499}
            height={499}
            alt="Nike Air Zoom Pegasus 36"
            className="-rotate-[24deg] -translate-x-4"
          />
        </div>
        <div className="mt-5">
          <h2 className="text-lg font-bold">Nike Air Zoom Pegasus 36</h2>
          <p className="mt-4 text-sm leading-6 opacity-60">
            The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
            that targets breathability across high-heat areas. A slimmer heel
            collar and tongue reduce bulk, while exposed cables give you a snug
            fit at higher speeds.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-bold">$108.97</p>
            <p className="add-to-cart-btn">Add To Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
