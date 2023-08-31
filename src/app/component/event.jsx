import React from "react";
// import DownloadButton from "./downloadBtn";

export default function event() {
  let event = [
    { name: "Olimpiade Matematika", icon: "/assets/final-icon.svg" },
    { name: "Seminar Nasional", icon: "/assets/seminar.svg" },
    { name: "Desain Grafis", icon: "/assets/desain.svg" },
  ];
  return (
    <div className="flex flex-col bg-gradient-to-b from-tema2-0 to-white pt-14">
      <div className="flex items-center justify-center">
        <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110">
          Event Olmat
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pt-12 px-5">
        {event.map((event) => (
          <div className="grid p-8 relative place-items-center ">
            <img
              className=" mb-5 lg:w-[70%]"
              src={event.icon}
              alt="event olmat"
            />
            <h1 className="left-1/2  text-2xl pt font-Adlam text-tema1-0 text-center bottom-0">
              {event.name}
            </h1>
            {/* <DownloadButton /> */}
          </div>
        ))}
        <div className="aspect-auto"></div>
      </div>
    </div>
  );
}
