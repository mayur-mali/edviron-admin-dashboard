import React, { useEffect, useState } from "react";

export default function TimeAndDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  //console.log(time);
  return (
    <div className="w-full bg-[#FCFCFC] p-8 rounded h-28 flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div className="h-10 w-10 rounded text-xs flex justify-center items-center text-custom-gray font-normal border-2 border-[#E6E6E6] bg-[#FCFCFC] p-1">
          {time.getHours() > 9
            ? time.getHours() % 12 || 12
            : "0" + (time.getHours() % 12) || 12}
        </div>
        <span>:</span>
        <div className="h-10 w-10 rounded text-xs flex justify-center items-center text-custom-gray font-normal border-2 border-[#E6E6E6] bg-[#FCFCFC] p-1">
          {time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes()}
        </div>

        <div className="h-10 w-10 rounded text-xs flex justify-center items-center text-custom-gray font-normal  bg-custom-green p-1">
          {time.getHours() > 11 ? "PM" : "AM"}
        </div>
      </div>
      <div className="text-base">
        {time.getDate()}/
        {time.getMonth() > 9
          ? time.getMonth() + 1
          : "0" + (time.getMonth() + 1)}
        /{time.getFullYear()}
      </div>
    </div>
  );
}
