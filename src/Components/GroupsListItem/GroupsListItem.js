import ham from "../../assets/ham.png";
import add_icon from "../../assets/Add2.png";

export default function GroupsListItem({
  groupName,
  level,
  major,
  openedIn,
  studentsNumber,
  teachers,
}) {
  return (
    <div
      className={`box w-[31%] rounded-2xl p-4 mb-7 ${
        major === "frontend" ? "bg-pink" : "bg-green"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-gray-600 text-sm">{openedIn}</span>
        <img src={ham} alt="" />
      </div>
      <h1 className="text-dark font-semibold text-xl mb-2">{groupName}</h1>
      <p className="text-gray-600 text-sm mb-3">{`O'quvchilar soni: ${studentsNumber}`}</p>
      <div className="level mb-5">
        <p className="text-dark font-meidum text-sm px-2 mb-1 font-medium">
          {level.status} o'z
        </p>
        <div className="h-2 rounded bg-default">
          <div
            className={`w-[${level.percent}%] h-full bg-orange rounded `}
          ></div>
        </div>
        <div className="text-right text-dark  font-medium mx-4 mt-1">
          {level.percent}%
        </div>
      </div>
      {teachers.length ? (
        <div className="teachers flex items-center justify-between">
          <span className="text-gray-600">O'qituvchi</span>
          <div className="flex">
            {teachers.map((item, index) => (
              <img src={item.picture} key={index} alt="" className="-mr-2" />
            ))}
            <img src={add_icon} alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
