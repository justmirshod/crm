import dark_icon from "../../assets/Vector (2).png";
import add_icon from "../../assets/Add.png";
import group_icon from "../../assets/Group.png";
import search_icon from "../../assets/search 1.png";
import { useSelector } from "react-redux";
export default function Navbar() {
  const { activeUser } = useSelector((state) => state.pages);

  return (
    <div className="navbar bg-none flex items-center justify-between">
      <div className="name">
        <span className="text-dark text-xl font-semibold">
          Salom {activeUser.first_name} 👋🏼
        </span>
      </div>
      <div className="icons-part flex items-center">
        <img src={dark_icon} alt="dark" className="mr-3" />
        <img src={add_icon} alt="add" className="mr-3" />
        <img src={group_icon} alt="group" className="mr-3" />
        <div className="search-panel flex items-center  rounded-xl p-[6px] bg-default shadow-sm">
          <img src={search_icon} alt="search" className="mr-2 w-1/2" />
          <input
            type="text"
            placeholder="Qidiruv"
            className=" placeholder:text-light_gray text-sm outline-none bg-none w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
