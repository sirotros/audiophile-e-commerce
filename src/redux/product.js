import { createSlice } from "@reduxjs/toolkit";
import data from "../data/product-data.json";

export const product = createSlice({
  name: "product",
  initialState: {
    product: data,
  },
  reducer: {},
});

export default product.reducer;
