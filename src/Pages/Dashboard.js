import Navbar from "../Components/Navbar/Navbar";
import BarChart from "../Components/Charts/BarChart";
import PieChart from "../Components/Charts/Pie";

export default function Dashboard() {
  return (
    <div className=" w-4/5 ml-auto py-5 px-16 bg-light_white">
      <Navbar />
      <div className="flex mt-20 items-center justify-between">
        <div className="w-2/3 bg-default px-10 pt-8 pb-10  rounded-xl shadow-lg relative">
          <BarChart />
          <div className="absolute top-5 right-10 border rounded-xl py-2 px-6 bg-light_white">
            <select name="" id="" className="bg-light_white outline-none">
              <option value="1">Yillar</option>
            </select>
          </div>
        </div>
        <div className="w-[28%] bg-default roundedd-xl shadow-lg px-5 py-7 rounded-xl">
          <div className="pie-header">
            <h1 className="text-dark font-semibold text-2xl">O'quvchilar</h1>
            <span className="text-light_gray text-sm">
              Guruhdagi o'quvchilar guruhi
            </span>
          </div>
          <div className="">
            <div className="rounded-full shadow-xl px-4 pt-4 pb-6  flex items-center justify-center relative">
              <PieChart />
              <div className="absolute w-[40px] leading-none text-center flex flex-col items-center">
                <span className="text-lg font-bold text-dark ">56%</span> Umumiy
                o'quvchilar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
