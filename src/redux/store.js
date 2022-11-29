import { configureStore } from "@reduxjs/toolkit";
import pages from "../Components/Sidebar/sidebar_slice";
import students from "../Components/StudentList/student_slice";

export const store = configureStore({
  reducer: {
    pages,
    students,
  },
});
