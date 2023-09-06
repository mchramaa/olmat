"use client";

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

  let price = [
    {
      acara: "Olmat",
      name1: "SD/MI",
      name2: "SMP/MTs",
      name3: "SMA/MA",
      harga1: "Rp. 40.000",
      harga2: "Rp. 45.000",
      harga3: "Rp. 50.000",
    },
    {
      acara: "Seminar",
      name1: "Wave-1",
      name2: "",
      name3: "",
      harga1: "Rp. 40.000",
      harga2: "",
      harga3: "",
    },
    {
      acara: "Desain & Puisi",
      name1: "Wave-1",
      name2: "Wave-2",
      name3: "Wave-3",
      harga1: "Rp. 40.000",
      harga2: "Rp. 45.000",
      harga3: "Rp. 50.000",
    },
  ];

  return (
    <div className="flex flex-col pt-14 ">
      <div className="flex items-center justify-center">
        <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none">
          Event Olmat
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 pt-7 px-5 ">
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
      </div>
      <div className="flex flex-col justify-center items-center pt-5">
        <h1 className=" w-fit text-center text-tema1-0 text-xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none">
          Biaya Pendaftaran
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-7  ">
          {price.map((harga) => (
            <div
              key={harga.acara}
              className="bg-gradient-to-t from-tema3-0 to-white rounded-xl drop-shadow-lg hover:scale-110 transition"
            >
              <div className="bg-tema1-0 px-12 py-2 rounded-t-xl">
                <h1 className="text-xl font-bold text-white text-center">
                  {harga.acara}
                </h1>
              </div>
              <div className="flex flex-col px-7 py-4">
                <div className="flex flex-nowrap justify-between">
                  <h1>{harga.name1}</h1>
                  <p className="pl-2">{harga.harga1}</p>
                </div>
                <div className="flex justify-between">
                  <h1>{harga.name2}</h1>
                  <p className="pl-2">{harga.harga2}</p>
                </div>
                <div className="flex justify-between">
                  <h1>{harga.name3}</h1>
                  <p className="pl-2">{harga.harga3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[url(/assets/wave.svg)]"></div>
      </div>
    </div>
  );
}
