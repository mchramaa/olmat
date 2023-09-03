import React from "react";

export default function event() {
  let event = [
    {
      name: "Olimpiade Matematika",
      icon: "/assets/final-icon.svg",
      path: "/assets/juknis/JUKLAK JUKNIS OLMAT UINSA 2023.pdf",
      grid: "md:col-start-2",
      buttonName: "Download JUKNIS",
    },
    {
      name: "Seminar Nasional",
      icon: "/assets/seminar.svg",
      path: "https://bit.ly/SeminarNasionalOLMAT2023",
      grid: "md:col-start-1",
      buttonName: "Daftar Seminar",
    },
    {
      name: "Cipta Baca Puisi",
      icon: "/assets/puisi.svg",
      path: "/assets/juknis/JUKLAK JUKNIS LOMBA CIPTA BACA PUISI OLMAT 2023.pdf",
      grid: "md:col-start-2",
      buttonName: "Download JUKNIS",
    },
    {
      name: "Desain Grafis",
      icon: "/assets/desain.svg",
      path: "/assets/juknis/JUKLAK JUKNIS LOMBA DESAIN GRAFIS OLMAT 2023.pdf",
      grid: "md:col-start-3",
      buttonName: "Download JUKNIS",
    },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-b from-tema2-0 to-white pt-14">
      <div className="flex items-center justify-center">
        <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none">
          Event Olmat
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pt-12 px-5 ">
        {event.map((event) => (
          <div
            className={`grid p-8 relative place-items-center group ${event.grid}`}
            key={event.name}
          >
            <img
              className=" mb-5 w-[60%] lg:w-[40%] hover:scale-105 hover:drop-shadow-lg transition-transform divide-neutral-400"
              src={event.icon}
              alt="event olmat"
            />
            <h1 className="left-1/2  text-2xl pt font-Adlam text-tema1-0 text-center bottom-0 pointer-events-none">
              {event.name}
            </h1>
            <a
              className="px-3 py-1 mt-4 rounded-full font-Adlam bg-tema1-0 text-white hover:scale-110 transition-transform duration-500 hover:shadow-lg"
              href={event.path}
              target="blank"
            >
              {event.buttonName}
            </a>
          </div>
        ))}
        <div className="aspect-auto"></div>
      </div>
    </div>
  );
}
