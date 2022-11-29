import Navbar from "../Components/Navbar/Navbar";
import StudentsHeader from "../Components/StudentsHeader/StudentsHeader";
import StudentList from "../Components/StudentList/StudentList";

export default function Students() {
  return (
    <div className=" w-4/5 students py-5 px-10 bg-light_white">
      <Navbar />
      <StudentsHeader />
      <StudentList />
    </div>
  );
}
