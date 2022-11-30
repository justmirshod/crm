import { useEffect, useState } from "react";

export default function Time() {
  const [now, setNow] = useState(new Date());

  const timer = (time) => {
    if (time.length === 1) {
      return "0" + time;
    } else {
      return time;
    }
  };

  const hours = timer(now.getHours().toString());
  const minutes = timer(now.getMinutes().toString());
  const seconds = timer(now.getSeconds().toString());
  // console.log(seconds);

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return (
    <div className="border timer text-2xl w-[120px] text-default rounded-2xl py-6 text-center">
      <span className="">{`${hours}:${minutes}:${seconds}`}</span>
    </div>
  );
}
