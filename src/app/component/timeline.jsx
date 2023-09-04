import React from "react";

export default function Timeline() {
  let timeline = [
    {
      name: "Penyisihan",
      icon: "/assets/penyi-semi-icon.svg",
      date: "16 September 2023",
      col: "md:col-start-1",
    },
    {
      name: "Semifinal",
      icon: "/assets/penyi-semi-icon.svg",
      date: "23 September 2023",
      col: "md:col-start-3",
    },
    {
      name: "Final",
      icon: "/assets/final-icon.svg",
      date: "07 Oktober 2023",
      col: "md:col-start-5",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-20 items-center justify-center">
      {timeline.map((time) => (
        <div key={time.name} className={`${time.col}`}>
          <div>
            <img className=" w-full" src={time.icon} alt="" />
          </div>
          <h1 className="text-3xl font-Adlam text-tema1-0">{time.name}</h1>
          <h5 className="text-lg ">{time.date}</h5>
        </div>
      ))}
    </div>
  );
}
