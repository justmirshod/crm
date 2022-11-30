import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "Jone Cooper",
      main: "Microsoft",
      phoneNumber: "(255) 555-0118",
      payment: "697 000",
      group: "Frontend 010",
      status: "active",
    },
    {
      name: "Floyd Miles",
      main: "Yahoo",
      phoneNumber: "(205) 505-0110",
      payment: "597 000",
      group: "Frontend 010",
      status: "inactive",
    },
    {
      name: "Ronald Richards Cooper",
      main: "Tesla",
      phoneNumber: "(255) 555-0118",
      payment: "697 000",
      group: "Frontend 010",
      status: "inactive",
    },
    {
      name: "Jerome Bell",
      main: "Google",
      phoneNumber: "(255) 555-0118",
      payment: "697 000",
      group: "Frontend 010",
      status: "active",
    },
  ],
  activeFilter: "all",
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      const newData = state.data.filter((item) => item.name === payload);
      state.data = newData;
    },
    setFilter: (state, { payload }) => {
      state.activeFilter = payload;
    },
  },
});

export const { setSearch, setFilter } = studentSlice.actions;
export default studentSlice.reducer;
