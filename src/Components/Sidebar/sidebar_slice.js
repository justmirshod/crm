import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "",
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    navigateTo: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});

export const { navigateTo } = pagesSlice.actions;
export default pagesSlice.reducer;
