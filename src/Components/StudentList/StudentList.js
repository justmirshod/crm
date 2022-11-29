import search_icon from "../../assets/search 1.png";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setFilter, setSearch } from "./student_slice";

export default function StudentList() {
  const { data } = useSelector((state) => state.students);
  console.log(data);

  return (
    <div className="list bg-default p-3 mt-10 rounded-2xl shadow-md">
      <div className="list-header flex items-center justify-between mb-3">
        <div>
          <h1 className="text-dark font-bold text-xl">Hamma o'quvchilar</h1>
          <span className="text-sm text-light_green">Faol o'quvchilar</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-light_white rounded-xl  mr-2 p-2 ">
            <img src={search_icon} alt="" className="mr-2" />
            <input
              type="text"
              placeholder="Qidiruv"
              className="placeholder:text-sm placeholder:text-light_gray bg-light_white outline-none w-[120px]"
            />
          </div>
          <div className="flex items-center bg-light_white rounded-xl p-2">
            <span className="text-light_gray w-[120px]">Short Status:</span>
            <select name="" id="" className="bg-light_white outline-none">
              <option value="0">Faol</option>
            </select>
          </div>
        </div>
      </div>
      <div className="list-body">
        <table className=" table-auto w-full">
          <thead className="border-b">
            <tr className="text-light_gray">
              <td className="text-left py-4">F.I.O</td>
              <td className="text-left">Yo'nalish</td>
              <td className="text-left">Telefon nomer</td>
              <td className="text-left">To'lov</td>
              <td className="text-left">Guruh</td>
              <td className="text-left">Status</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.name}
                className={index === data.length - 1 ? null : "border-b"}
              >
                <td className="py-4">{item.name}</td>
                <td>{item.main}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.payment}</td>
                <td>{item.group}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
