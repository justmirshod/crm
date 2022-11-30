import Navbar from "../Components/Navbar/Navbar";
import StudentsHeader from "../Components/Hedaer/Header";
import GroupList from "../Components/GroupsList/GroupList";

export default function Groups() {
  return (
    <div className="w-4/5 min-h-screen ml-auto px-10 py-5 bg-light_white">
      <Navbar />
      <StudentsHeader />
      <GroupList />
    </div>
  );
}
