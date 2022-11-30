import search_icon from "../../assets/search 1.png";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setFilter, setSearch } from "./student_slice";
import { createSelector } from "reselect";
import StudentListItem from "../StudentListItem/StudentListItem";

export default function StudentList() {
  const { data, activeFilter } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const selectedFilters = createSelector(
    (state) => state.students.activeFilter,
    (state) => state.students.data,
    (activeFilter, data) => {
      if (activeFilter === "all") {
        return data;
      } else {
        return data.filter((item) => item.status === activeFilter);
      }
    }
  );

  const visiblePosts = useSelector(selectedFilters);

  return (
    <div className="list bg-default p-6 mt-10 rounded-xl shadow-md">
      <div className="list-header flex items-center justify-between mb-3">
        <div>
          <h1 className="text-dark font-bold text-xl">Hamma o'quvchilar</h1>
          <span className="text-sm text-light_green">
            {activeFilter === "all"
              ? "Hamma"
              : activeFilter === "active"
              ? "Faol"
              : "Nofaol"}{" "}
            o'quvchilar
          </span>
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
            <select
              name=""
              id=""
              value={activeFilter}
              className="bg-light_white outline-none"
              onChange={(e) => {
                console.log(e.target.value);
                dispatch(setFilter(e.target.value));
              }}
            >
              <option value="all">Hammasi</option>
              <option value="active">Faol</option>
              <option value="inactive">Nofaol</option>
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
            {visiblePosts.map((item, index) => (
              <StudentListItem
                key={index}
                item={item}
                index={index}
                data={visiblePosts}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="list-footer flex items-center mt-8 justify-end">
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          {"<"}
        </button>
        <button className="border p-1 bg-main text-default inline-block w-[30px] h-[30px] mr-2 rounded-md">
          1
        </button>
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          2
        </button>
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          3
        </button>
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          4
        </button>
        <span>...</span>
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          40
        </button>
        <button className="border p-1 bg-light_white inline-block w-[30px] h-[30px] mr-2 rounded-md">
          {">"}
        </button>
      </div>
    </div>
  );
}
