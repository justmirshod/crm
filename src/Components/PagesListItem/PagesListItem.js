import vector from "../../assets/chevron-right 2.png";
import { Link } from "react-router-dom";

export default function PagesListItem({
  img,
  text,
  path,
  style,
  navigate = Function.prototype,
}) {
  return (
    <li className={`${style} p-3 rounded-lg mb-2`}>
      <Link to={path} className="flex items-center" onClick={navigate}>
        <img src={img} alt="Dashboard" className="mr-3" />
        <span className={!style ? `text-light_gray` : "text-default"}>
          {text}
        </span>
        <img src={vector} alt="vector" className="ml-auto" />
      </Link>
    </li>
  );
}
