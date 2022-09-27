import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
function Chakra() {
  const data = useSelector((state) => state.product.product.products);
  const speakers = data.filter((e) => e.category === "speakers").reverse();
  const earphones = data.filter((e) => e.category === "earphones");
  return (
    <div className="lg:w-3/4 sm:w-full mb-10 lg:mx-auto">
      {speakers[0] && (
        <div className="lg:h-[595px] lg:w-[1110px] sm:h-[595px] sm:w-11/12 relative bg-orange mx-auto rounded-xl overflow-hidden ">
          <img
            className="lg:w-[600px] lg:h-[700px] absolute sm:top-10 lg:top-40 lg:left-[-70px] ml-8 md:ml-36"
            src={speakers[0].cartImage}
            alt="speaker"
          />
          <div className="absolute lg:right-[-80px] sm:text-center sm:top-24 md:top-28 lg:top-0 h-full flex flex-col justify-center text-white">
            <h1 className="lg:text-8xl lg:w-3/4 sm:text-2xl lg:text-left sm:mt-10">
              {speakers[0].name}
            </h1>
            <p className="lg:w-80 sm:w-3/4 sm:mx-auto lg:text-left lg:ml-0 lg:mt-8 sm:mt-2 text-[#ffffffbf] ">
              {speakers[0].description}
            </p>
            <div className="sm:mx-auto lg:ml-0">
              <Link to={"/speakers/" + speakers[0].slug}>
                <Button dark>SEE PRODUCT</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {speakers[1] && (
        <div className="my-10 relative">
          <img
            src={speakers[1].categoryImage.desktop}
            alt="category"
            className="sm:w-11/12 lg:w-[1110px] sm:mx-auto sm:h-32 lg:h-80 md:h-72"
          />
          <div className="absolute lg:top-32 lg:left-56 sm:top-3 sm:left-12 md:top-28 md:left-20">
            <p className="lg:text-3xl md:ml-1 "> {speakers[1].name} </p>
            <Link to={"/speakers/" + speakers[1].slug}>
              <Button outline mobile>
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
      )}

      {earphones[0] && (
        <div className="lg:w-3/4 md:w-11/12 sm:3/4 mb-10 mx-auto flex lg:justify-between lg:flex-row md:flex-row sm:flex-col">
          <img
            className="lg:w-[540px] md:w-2/4 sm:w-11/12 mx-auto h-80 rounded-lg"
            src={earphones[0].gallery.second.desktop}
            alt={earphones[0].name}
          />
          <div className="lg:w-2/4 sm:w-11/12 mx-auto sm:h-60 md:h-80 lg:h-80 lg:ml-5  sm:mt-5 lg:mt-0 bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-center">
            <p className="font-bold text-2xl"> {earphones[0].name} </p>
            <Link to={"/earphones/" + earphones[0].slug}>
              <Button outline>SEE PRODUCT</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chakra;
