import { createSlice } from "@reduxjs/toolkit";
export const basket = createSlice({
  name: "basket",
  initialState: {
    baskets: null,
  },
  reducers: {
    // addBasket : (state,action) =>{
    //   // state.baskets = 
    // }
  },
});

export default basket.reducer;
