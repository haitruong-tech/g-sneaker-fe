import Image from "next/image";
import React from "react";

const CardItems = () => {
  return (
    <div>
      {/* cart item */}
      <div className="flex mt-10 gap-x-8 items-start">
        <div className="bg-[#e1e7ed] rounded-full">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
            width={90}
            height={90}
            alt="Nike Air Zoom Pegasus 36"
            className="-rotate-[24deg] -translate-x-1 -translate-y-4 scale-[1.4]"
          />
        </div>
        <div>
          <h2 className="font-bold text-sm">Nike Air Zoom Pegasus 36</h2>
          <p className="text-lg font-bold mt-2">$108.96</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-x-3 items-center">
              <div className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex">
                <Image
                  src="/assets/minus.png"
                  alt="minus"
                  width={8}
                  height={8}
                />
              </div>
              <span>1</span>
              <div className="bg-[#e9e9e9] rounded-full w-[28px] h-[28px] items-center justify-center flex">
                <Image src="/assets/plus.png" alt="plus" width={8} height={8} />
              </div>
            </div>
            <div className="bg-Yellow rounded-full w-[28px] h-[28px] items-center justify-center flex">
              <Image
                src="/assets/trash.png"
                alt="trash"
                width={14}
                height={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
