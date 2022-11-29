import PagesListItem from "../PagesListItem/PagesListItem";
//icons
import dash_img from "../../assets/key-square 1.png";
import groups_icon from "../../assets/3d-square 1.png";
import student_icon from "../../assets/user-square 1.png";
import time_icon from "../../assets/wallet-money 2.png";
import setting_icon from "../../assets/discount-shape 1.png";
import help_icon from "../../assets/message-question 1.png";

import { navigateTo } from "../Sidebar/sidebar_slice";

import { useDispatch, useSelector } from "react-redux";

export default function PagesList() {
  const { activePage } = useSelector((state) => state.pages);
  const dispacth = useDispatch();

  const navigate = (page) => {
    dispacth(navigateTo(page));
  };

  return (
    <ul className="side-link flex flex-col">
      <PagesListItem
        img={dash_img}
        text={"Dashboard"}
        path="/dashboard"
        style={activePage === "dashboard" ? "bg-main" : null}
        navigate={() => navigate("dashboard")}
      />
      <PagesListItem
        img={groups_icon}
        text={"Guruhlar"}
        path="/groups"
        style={activePage === "groups" ? "bg-main" : null}
        navigate={() => navigate("groups")}
      />
      <PagesListItem
        img={student_icon}
        text={"O'quvchilar"}
        path="/students"
        style={activePage === "students" ? "bg-main" : null}
        navigate={() => navigate("students")}
      />
      <PagesListItem
        img={time_icon}
        text={"Dars jadvali"}
        path="/timetable"
        style={activePage === "timetable" ? "bg-main" : null}
        navigate={() => navigate("timetable")}
      />
      <PagesListItem
        img={setting_icon}
        text={"Sozlamalar"}
        path="/settings"
        style={activePage === "settings" ? "bg-main" : null}
        navigate={() => navigate("settings")}
      />
      <PagesListItem
        img={help_icon}
        text={"Yordam"}
        path="/help"
        style={activePage === "help" ? "bg-main" : null}
        navigate={() => navigate("help")}
      />
    </ul>
  );
}
