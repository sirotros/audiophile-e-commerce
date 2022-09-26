import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import baskets from "./basket";
export default configureStore({
  reducer: {
    product: productSlice,
    baskets: baskets,
  },
});
