import React from "react";

export default function Timeline() {
  let timeline = [
    {
      name: "Penyisihan",
      icon: "/assets/penyi-semi-icon.svg",
      date: "16 September 2023",
    },
    {
      name: "Semifinal",
      icon: "/assets/penyi-semi-icon.svg",
      date: "23 September 2023",
    },
    {
      name: "Final",
      icon: "/assets/penyi-semi-icon.svg",
      date: "07 Oktober 2023",
    },
  ];
  return (
    <div>
      {timeline.map((time) => (
        <div key={time.name}>
          <img src={time.icon} alt="" />
          <h1>{time.name}</h1>
          <h5>{time.date}</h5>
        </div>
      ))}
    </div>
  );
}
