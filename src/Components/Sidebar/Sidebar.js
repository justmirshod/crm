import brand from "../../assets/setting 1.png";
import PagesList from "../PagesList/PagesList";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { navigateTo } from "./sidebar_slice";
export default function Sidebar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigateTo(pathname.substring(1, pathname.length)));
  }, [pathname]);

  return (
    <div className="sidebar w-1/5">
      <div className="bg-default shadow-xl min-h-screen py-4 px-3">
        <Link to={"/"}>
          <h1 className="sidebar-brand flex items-center mb-10">
            <img src={brand} alt="brand" className="mr-2" />
            <span className="text-2xl font-semibold mb-1">Dashboard</span>
          </h1>
        </Link>
        <PagesList pathname={pathname} />
      </div>
    </div>
  );
}
