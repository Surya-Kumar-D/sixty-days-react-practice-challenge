import { useEffect, useState } from "react";

function Day13() {
  let time = new Date();
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

  useEffect(() => {
    let interval = setInterval(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function pad(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-[black]">
      <div className="flex justify-center items-center text-[5rem] text-[#00aeff]">
        {pad(hours, minutes, seconds)}
      </div>
      <button className="border p-[1rem] text-[5rem] text-[#00aeff]">
        AM/PM 12 hour format
      </button>
    </div>
  );
}

export default Day13;
