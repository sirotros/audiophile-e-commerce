import { createSlice } from "@reduxjs/toolkit";
export const modalOpen = createSlice({
  name: "modalOpen",
  initialState: {
    modalOpen: false,
  },
  reducers: {
    open: (state) => {
      state.modalOpen = true;
    },
    close: (state) => {
      state.modalOpen = false;
    },
  },
});
export const { open, close } = modalOpen.actions;
export default modalOpen.reducer;
