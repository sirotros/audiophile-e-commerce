import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { calculatTotalPrice, clearBasketPayment } from "../redux/basket";
import { Link } from "react-router-dom";
import Button from "./Button";

function Order() {
  const dispatch = useDispatch();
  const baskets = useSelector((state) => state.baskets);
  const basketItems = useSelector((state) => state.baskets.baskets);
  const shipping = 50;
  const vat = Math.round(baskets.totalPrice * 0.2);
  const grandTotal = baskets.totalPrice + shipping + vat;
  const [items, setItems] = useState(1);
  const orderItems = basketItems.slice(0, items);

  const displayOrder = () => {
    if (items === 1) {
      setItems(items + basketItems.length);
    } else {
      setItems(1);
    }
  };

  useEffect(() => {
    dispatch(calculatTotalPrice());
  }, []);

  return (
    <div className="w-full min-h-48 p-8 rounded-lg bg-white">
      <MdDone className="bg-orange text-white w-16 h-16 rounded-full " />
      <h1 className="text-3xl font-bold my-5 w-64">
        THANK YOU
        <br />
        FOR YOUR ORDER
      </h1>
      <p className="text-sm text-gray my-5">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex sm:flex-col lg:flex-row h-max">
        <div className="lg:w-10/12 px-2 bg-grayLight rounded-l-lg">
          {orderItems.map((orderItem) => (
            <div
              key={nanoid()}
              className="flex my-4 justify-between items-center"
            >
              <img
                className="w-16 h-16 rounded-xl"
                src={orderItem.detailProduct.image.desktop}
                alt={orderItem.detailProduct.name}
              />
              <div className="text-left w-full px-7">
                <p>{orderItem.detailProduct.name}</p>
                <p>${orderItem.detailProduct.price}</p>
              </div>
              <div className="px-5 text-white">x{orderItem.quantity}</div>
            </div>
          ))}
          {basketItems.length > 1 ? (
            <button
              onClick={(e) => displayOrder()}
              className="w-full text-center text-gray mb-3"
            >
              {items === 1
                ? `and ${basketItems.length} other item(s)`
                : "View less"}
            </button>
          ) : null}
        </div>
        <div className="lg:w-2/4 lg:h-auto sm:h-24 bg-dark flex flex-col justify-center  rounded-r-lg">
          <h1 className="text-gray text-lg ml-10">GRAND TOTAL</h1>
          <p className="text-white ml-10"> $ {grandTotal} </p>
        </div>
      </div>
      <Link to={"/"} onClick={(e) => dispatch(clearBasketPayment())}>
        <Button orange full>
          BACK TO HOME
        </Button>
      </Link>
    </div>
  );
}

export default Order;
