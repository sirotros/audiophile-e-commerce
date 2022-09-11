import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import baskets from "./basket";
import modalOpenSlice from "./ModalRedux";
export default configureStore({
  reducer: {
    product: productSlice,
    baskets: baskets,
    modalOpen: modalOpenSlice,
  },
});
