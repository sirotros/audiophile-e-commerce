import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const basket = createSlice({
  name: "basket",
  initialState: {
    baskets: localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
    totalPrice: 0,
    quantity: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const existingIndex = state.baskets?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.baskets[existingIndex] = {
          ...state.baskets[existingIndex],
          quantity:
            state.baskets[existingIndex].quantity + action.payload.quantity,
        };
        toast.success(
          `Item '${action.payload.detailProduct.name}' was added to cart`
        );
      } else {
        state.baskets = [...state.baskets, action.payload];
        toast.success(
          `Item '${action.payload.detailProduct.name}' was added to cart`
        );
      }
      localStorage.setItem("basket", JSON.stringify(state.baskets));
    },
    decreaseBasket(state, action) {
      const itemIndex = state.baskets.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.baskets[itemIndex].quantity > 1) {
        state.baskets[itemIndex].quantity -= 1;
      } else if (state.baskets[itemIndex].quantity === 1) {
        const nextbaskets = state.baskets.filter(
          (item) => item.id !== action.payload.id
        );

        state.baskets = nextbaskets;
      }

      localStorage.setItem("basket", JSON.stringify(state.baskets));
    },
    increaseBasket(state, action) {
      const itemIndex = state.baskets.findIndex(
        (item) => item.id === action.payload.id
      );
      state.baskets[itemIndex].quantity += 1;

      localStorage.setItem("basket", JSON.stringify(state.baskets));
    },
    calculatQuantity(state, action) {
      let quantity = 0;
      state.baskets.map((basket) => {
        quantity += basket.quantity;
      });
      state.quantity = quantity;
    },

    calculatTotalPrice(state, action) {
      const totals = state.baskets?.map((basket) => {
        return basket.detailProduct?.price * basket?.quantity;
      });
      let totalPrice = 0;
      totals.map((total) => (totalPrice += total));
      state.totalPrice = totalPrice;
    },

    clearBasketPayment(state){
      state.baskets = [];
      state.quantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("basket");
    },
    clearBasket(state) {
      state.baskets = [];
      state.quantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("basket");
      toast.success("Basket Cleared");
    },
  },
});
export const {
  addToBasket,
  decreaseBasket,
  increaseBasket,
  calculatQuantity,
  calculatTotalPrice,
  removeFromCart,
  clearBasketPayment,
  clearBasket,
} = basket.actions;
export default basket.reducer;
