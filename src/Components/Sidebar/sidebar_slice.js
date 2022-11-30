import user_pic from "../../assets/Ellipse 8.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "",
  activeUser: {
    first_name: "Sheroz",
    last_name: "Turdiyev",
    status: "Frontend o'qituvchi",
    pic: user_pic,
  },
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
