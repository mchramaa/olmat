import React from "react";
import Nav from "./component/Nav";
import Paralax from "./component/Intro";
import Event from "./component/event";
import Timeline from "./component/timeline";
import Rayon from "./component/rayon";
import Olmat from "./component/olmat";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="fixed top-0 z-40">
        <Nav />
      </div>
      <div className="h-[95vh] mt-[65px]" id="home">
        <Paralax />
      </div>
      <div className="" id="olmat">
        <Olmat />
      </div>
      <div className="mt-4" id="rayon">
        <Rayon />
      </div>
      <div className="bg-gradient-to-t from-tema2-0 to-white">
        <div id="event">
          <Event />
        </div>
        <div id="timeline" className="mt-10 ">
          <Timeline />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </main>
  );
}
