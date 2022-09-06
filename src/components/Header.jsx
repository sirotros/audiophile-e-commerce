import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <header className="w-full h-20 bg-dark">
      <div className="w-2/4 h-full mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-white text-2xl ">
          audiophile
        </Link>
        <div className="flex items-center h-full">
          <Link
            className="text-white mx-3 text-sm h-full flex items-center"
            to={"/"}
          >
            HOME
          </Link>
          <Link
            className="text-white mx-3 text-sm h-full flex items-center"
            to={"/headphones"}
          >
            HEADPHONES
          </Link>
          <Link
            className="text-white mx-3 text-sm h-full flex items-center"
            to={"/speakers"}
          >
            SPEAKERS
          </Link>
          <Link
            className="text-white mx-3 text-sm h-full flex items-center"
            to={"/earphones"}
          >
            EARPHONES
          </Link>
        </div>
        <Link to={"/"} className="text-white">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </header>
  );
}

export default Header;
