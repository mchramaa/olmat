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
    <main>
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
      <div id="event">
        <Event />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
