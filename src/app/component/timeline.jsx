import React from "react";
import WaveBackground from "./wave";

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
    <div>
      <div className="flex justify-center">
        <h1 className="w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none ">
          Timeline
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-3 items-center justify-center">
        {timeline.map((time) => (
          <div key={time.name} className="flex items-center justify-center">
            <div className="flex justify-center">
              <img className="w-[100px]" src={time.icon} alt="" />
            </div>
            <div className="flex flex-col pl-3 ">
              <h1 className="text-3xl font-Adlam text-tema1-0">{time.name}</h1>
              <h5 className="text-lg ">{time.date}</h5>
            </div>
          </div>
        ))}
      </div>
      <WaveBackground />
    </div>
  );
}
