import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Basket() {
  return (
    <div className="w-full min-h-48 p-4 rounded-lg bg-white">
      <h1 className="w-full flex justify-center text-lg">Your Cart is empty</h1>
      <AiOutlineShoppingCart className="w-14 h-14 mx-auto mt-5" />
    </div>
  );
}

export default Basket;
