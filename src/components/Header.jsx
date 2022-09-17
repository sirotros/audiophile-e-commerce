import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open, close } from "../redux/ModalRedux";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { calculatQuantity } from "../redux/basket";
import Modal from "./Modal";
import Basket from "./Basket";
function Header() {
  const dispatch = useDispatch();
  const modalBoolean = useSelector((state) => state.modalOpen.modalOpen);
  const closeModal = () => dispatch(close());
  const openModal = () => dispatch(open());
  const basket = useSelector((state) => state.baskets.baskets);
  const basketTotal = useSelector((state) => state.baskets.quantity);
  useEffect(() => {
    dispatch(calculatQuantity());
  }, [basket]);
  return (
    <header className="w-full h-20 bg-dark">
      <div className="w-defaultWidth h-full mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-white text-2xl ">
          audiophile
        </Link>
        <div className="flex items-center h-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange"
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            id="home"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            id="headphones"
            to={"/headphones"}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            id="speakers"
            to={"/speakers"}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            id="earphones"
            className={({ isActive }) =>
              isActive
                ? "text-orange mx-3 text-sm h-full flex items-center hover:text-orange "
                : "text-white mx-3 text-sm h-full flex items-center hover:text-orange"
            }
            to={"/earphones"}
          >
            EARPHONES
          </NavLink>
        </div>

        {basketTotal > 0 ? (
          <button onClick={openModal} className="text-white relative">
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute bottom-3 left-4 bg-orange rounded-full flex items-start justify-center text-xs w-5 h-5">
              {basketTotal}
            </span>
          </button>
        ) : (
          <button onClick={openModal} className="text-white">
            <AiOutlineShoppingCart className="font-2xl" />
          </button>
        )}
      </div>
      <Modal isOpen={modalBoolean} onClose={closeModal}>
        <Basket />
      </Modal>
    </header>
  );
}

export default Header;
