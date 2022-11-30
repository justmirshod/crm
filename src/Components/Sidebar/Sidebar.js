import brand from "../../assets/setting 1.png";
import vector_icon from "../../assets/chevron-right 2.png";
import PagesList from "../PagesList/PagesList";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { navigateTo } from "./sidebar_slice";
import Time from "../Time/Time";
export default function Sidebar() {
  const { pathname } = useLocation();
  const { activeUser, activePage } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigateTo(pathname.substring(1, pathname.length)));
  }, [pathname]);

  return (
    <div className="sidebar w-1/5 fixed shadow-xl">
      <div className="bg-default min-h-screen h-full py-4 px-3">
        <Link to={"/"}>
          <h1 className="sidebar-brand flex items-center mb-10">
            <img src={brand} alt="brand" className="mr-2" />
            <span className="text-2xl font-semibold mb-1">Dashboard</span>
          </h1>
        </Link>
        <PagesList pathname={pathname} />
        {activePage === "dashboard" ? (
          <div className="px-3 mt-[50px] mb-4">
            <Time />
          </div>
        ) : null}

        <div
          className={`${
            activePage === "dashboard" ? null : "mt-[148px]"
          } user flex items-center px-3`}
        >
          <img src={activeUser.pic} alt="" className="mr-2" />
          <div>
            <p className="text-dark text-sm font-semibold">{`${activeUser.first_name} ${activeUser.last_name}`}</p>
            <span className="text-sm text-gray-600">{activeUser.status}</span>
          </div>
          <div className="ml-auto rotate-90 ">
            <img src={vector_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
