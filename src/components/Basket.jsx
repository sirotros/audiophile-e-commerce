import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { decreaseBasket, increaseBasket, clearBasket } from "../redux/basket";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import Button from "./Button";
import { calculatTotalPrice } from "../redux/basket";
function Basket({ toggleModal }) {
  const dispatch = useDispatch();

  const basketItem = useSelector((state) => state.baskets.baskets);
  const totalPrice = useSelector((state) => state.baskets.totalPrice);

  useEffect(() => {
    dispatch(calculatTotalPrice());
  }, [basketItem]);
  const decrementQuantity = (basket) => {
    dispatch(decreaseBasket(basket));
  };

  const incrementQuantity = (basket) => {
    dispatch(increaseBasket(basket));
  };
  const removeAll = () => {
    dispatch(clearBasket());
  };
  return (
    <>
      {basketItem.length > 0 ? (
        <div className="sm:w-10/12 lg:w-full min-h-48 sm:p-4 lg:p-4 rounded-lg bg-white">
          <div className="w-full flex justify-between">
            <h1>Basket ({basketItem.length}) </h1>
            <button className="underline text-gray" onClick={removeAll}>
              Remove All
            </button>
          </div>
          <div>
            {basketItem.map((basket) => {
              return (
                <div key={nanoid()} className="flex mt-4 justify-between">
                  {basket.detailProduct.image.desktop && (
                    <img
                      className="w-16 h-16"
                      src={basket.detailProduct.image.desktop}
                      alt={basket.detailProduct.name}
                    />
                  )}

                  <div className="text-left w-full px-7">
                    <p>{basket.detailProduct.name}</p>
                    <p>${basket.detailProduct.price}</p>
                  </div>
                  <div className="flex items-center bg-grayLight w-24 h-12">
                    <button
                      className="w-80 "
                      onClick={() => decrementQuantity(basket)}
                    >
                      -
                    </button>
                    <p>{basket.quantity}</p>
                    <button
                      className="w-80 "
                      onClick={() => incrementQuantity(basket)}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-3 flex justify-between items-center">
            <p> Total </p>
            <p className="font-bold text-lg"> ${totalPrice} </p>
          </div>
          <Link to={"/checkout"} onClick={toggleModal}>
            <Button orange full className="h-[40px]">
              CHECKOUT
            </Button>
          </Link>
        </div>
      ) : (
        <div className="sm:w-10/12 lg:w-full min-h-48 p-4 rounded-lg bg-white">
          <h1 className="w-full flex justify-center text-lg">
            Your Basket is empty
          </h1>
          <AiOutlineShoppingCart className="w-14 h-14 mx-auto mt-5" />
        </div>
      )}
    </>
  );
}

export default Basket;
