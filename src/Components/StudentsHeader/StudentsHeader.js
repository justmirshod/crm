import double_man from "../../assets/Group 10.png";
import man_icon from "../../assets/Group 11.png";
import man_x from "../../assets/man-x.png";
import active_icon from "../../assets/Group 10 (1).png";
export default function StudentsHeader() {
  return (
    <div className="header p-3 bg-default rounded-lg shadow-md flex justify-between mt-10">
      <div className="item w-1/4 flex items-center">
        <img src={double_man} alt="" className="w-[70px]" />
        <div className="flex flex-col ml-3">
          <span className="text-light_gray text-sm">Hamma o'quvchilar</span>
          <span className="text-dark text-xl font-semibold">125 ta</span>
          <span className="text-dark_gray text-sm">
            <span className="text-light_green">| 16%</span>Oylik
          </span>
        </div>
      </div>
      <div className="item w-1/4 flex items-center">
        <img src={man_icon} alt="" className="w-[70px]" />
        <div className="flex flex-col ml-3">
          <span className="text-light_gray text-sm">Bitirgan o'quvchilar</span>
          <span className="text-dark text-xl font-semibold">61 ta</span>
        </div>
      </div>
      <div className="item w-1/4 flex items-center">
        <img src={man_x} alt="" className="w-[70px]" />
        <div className="flex flex-col ml-3">
          <span className="text-light_gray text-sm">Ketgan o'quvchilar</span>
          <span className="text-dark text-xl font-semibold">10 ta</span>
          <span className="text-dark_gray text-sm">
            <span className="text-light_green">| 1%</span>Oylik
          </span>
        </div>
      </div>
      <div className="item w-1/4 flex items-center">
        <img src={active_icon} alt="" className="w-[70px]" />
        <div className="flex flex-col ml-3">
          <span className="text-light_gray text-sm">Faol o'quvchilar</span>
          <span className="text-dark text-xl font-semibold">54 ta</span>
        </div>
      </div>
    </div>
  );
}
