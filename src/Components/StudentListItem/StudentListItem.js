export default function StudentListItem({ item, index, data }) {
  return (
    <tr
      key={item.name}
      className={index === data.length - 1 ? null : "border-b"}
    >
      <td className="py-8">{item.name}</td>
      <td>{item.main}</td>
      <td>{item.phoneNumber}</td>
      <td>{item.payment}</td>
      <td>{item.group}</td>
      <td>
        <span
          className={
            item.status !== "active"
              ? "inline-block border bg-light_red border-red text-red w-[100px] text-center py-1"
              : "inline-block border bg-light_blue border-dark_green text-dark_green w-[100px] text-center py-1"
          }
        >
          {item.status}
        </span>
      </td>
    </tr>
  );
}
