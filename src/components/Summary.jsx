import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { calculatTotalPrice } from "../redux/basket";

import Button from "../components/Button";
function Summary({ form, toggleModal, setTrigger }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const baskets = useSelector((state) => state.baskets);
  const basketItems = useSelector((state) => state.baskets.baskets);
  const shipping = 50;
  const vat = Math.round(baskets.totalPrice * 0.2);
  const grandTotal = baskets.totalPrice + shipping + vat;

  const submitPayment = () => {
    setTrigger(true);
    if (form === undefined) return;

    setTrigger(false);
  };

  useEffect(() => {
    dispatch(calculatTotalPrice());
    basketItems.length === 0 ? setDisabled(true) : setDisabled(false);
  }, []);
  return (
    <div className="bg-white lg:w-[350px] sm:w-10/12 sm:mx-auto sm:mt-10 lg:mt-0  h-max p-8">
      <h1 className="text-xl">SUMMARY</h1>
      {basketItems.length > 0 ? (
        <>
          {basketItems.map((basketItem) => (
            <div
              key={nanoid()}
              className="flex my-4 justify-between items-center"
            >
              <img
                className="w-16 h-16 rounded-xl"
                src={basketItem.detailProduct.image.desktop}
                alt={basketItem.detailProduct.name}
              />
              <div className="text-left w-full px-7">
                <p>{basketItem.detailProduct.name}</p>
                <p>${basketItem.detailProduct.price}</p>
              </div>
              <div className="px-5 text-gray">x{basketItem.quantity}</div>
            </div>
          ))}
        </>
      ) : (
        <div className="w-full h-10  flex items-center justify-center text-gray">
          No items in basket
        </div>
      )}
      <div>
        <div className="w-full flex justify-between ">
          <p>Total</p>
          <p className="font-bold"> ${baskets.totalPrice}</p>
        </div>
        <div className="w-full flex justify-between">
          <p>SHIPPING</p>
          <p className="font-bold">$ {shipping}</p>
        </div>
        <div className="w-full flex justify-between">
          <p>VAT (INCLUDED)</p>
          <p className="font-bold">$ {vat}</p>
        </div>
        <div className="w-full flex justify-between mt-5">
          <p>GRAND TOTAL</p>
          <p className="font-bold text-orange">$ {grandTotal}</p>
        </div>
      </div>
      <Button orange full disabled={disabled} onClick={(e) => submitPayment()}>
        CONTINUE & PAY
      </Button>
    </div>
  );
}

export default Summary;
