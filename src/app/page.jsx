import React from "react";
import Nav from "./component/Nav";
import Paralax from "./component/Intro";
import Event from "./component/event";
import Timeline from "./component/timeline";
import Rayon from "./component/rayon";
import Olmat from "./component/olmat";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 z-40">
        <Nav />
      </div>
      <div className="h-[95vh] mt-[65px]">
        <Paralax />
      </div>
      <div>
        <Olmat />
      </div>
      <div className="mt-28">
        <Rayon />
      </div>
      <div id="event">
        <Event />
      </div>
      <div>
        <Timeline />
      </div>
      {/* ========Foot======== */}
    </main>
  );
}
