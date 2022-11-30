import teacher1 from "../../assets/Ellipse 18.png";
import teacher2 from "../../assets/Ellipse 19.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      openedIn: "December 20, 2022",
      groupName: "Frontend 010",
      major: "frontend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 70,
      },
      teachers: [
        {
          name: "",
          picture: teacher1,
        },
        {
          name: "",
          picture: teacher2,
        },
      ],
    },
    {
      openedIn: "December 20, 2022",
      groupName: "Backend 001",
      major: "backend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 30,
      },
      teachers: [],
    },
    {
      openedIn: "December 20, 2022",
      groupName: "Frontend 011",
      major: "frontend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 70,
      },
      teachers: [],
    },
    {
      openedIn: "December 20, 2022",
      groupName: "Frontend 013",
      major: "frontend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 70,
      },
      teachers: [],
    },
    {
      openedIn: "December 20, 2022",
      groupName: "Frontend 018",
      major: "frontend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 70,
      },
      teachers: [],
    },
    {
      openedIn: "December 20, 2022",
      groupName: "Backend 002",
      major: "backend",
      studentsNumber: 6,
      level: {
        status: "O'rtacha",
        percent: 70,
      },
      teachers: [],
    },
  ],
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
});

export const {} = groupSlice.actions;
export default groupSlice.reducer;
