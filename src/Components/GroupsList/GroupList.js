import { useSelector } from "react-redux";
import GroupsListItem from "../GroupsListItem/GroupsListItem";

export default function GroupList() {
  const { groups } = useSelector((state) => state.groups);
  return (
    <div className="list_group rounded-2xl shadow-lg bg-default p-10 mt-10">
      <div className="main-header flex items-center justify-between mb-4">
        <h1 className="text-xl text-dark font-bold ">Guruhlar</h1>
        <p className="mr-10 font-semibold">Oktabr, 27</p>
      </div>
      <div className="header-next flex items-center">
        <div className="mr-6">
          <p className="text-dark text-2xl font-semibold">7</p>
          <span className="text-light_gray">Faol Guruh</span>
        </div>
        <div className="mr-6">
          <p className="text-dark text-2xl font-semibold">2</p>
          <span className="text-light_gray">Tugatgan Guruh</span>
        </div>
        <div className="mr-6">
          <p className="text-dark text-2xl font-semibold">9</p>
          <span className="text-light_gray">Umumiy Guruh</span>
        </div>
      </div>
      <div className="group_list_body flex justify-between flex-wrap mt-10">
        {groups.map((item, index) => (
          <GroupsListItem {...item} key={index + 1} />
        ))}
      </div>
    </div>
  );
}
