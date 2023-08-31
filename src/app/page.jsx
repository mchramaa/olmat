import React from "react";
import Nav from "./component/Nav";
import Paralax from "./component/Intro";
import Event from "./component/event";

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
        <Event />
      </div>
      {/* ========Foot======== */}
    </main>
  );
}
