import React from "react";

function BestGear() {
  return (
    <div className="w-3/4 mx-auto mt-32 mb-20">
      <div className="w-3/4 mx-auto flex justify-between">
        <div className="my-auto w-[500px]">
          <h1 className="text-4xl font-semibold">
            BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-semibold mt-5">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment
          </p>
        </div>
        <img
          src="https://audiophile-ecommerce-mbart13.vercel.app/images/shared/desktop/image-best-gear.jpg"
          className="rounded-lg w-[540] h-[500]"
          alt="image"
        />
      </div>
    </div>
  );
}

export default BestGear;
