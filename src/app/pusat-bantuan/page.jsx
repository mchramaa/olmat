"use client";

import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import WaveBackground from "../component/wave";
import pusBanChat from "../../../public/assets/lottie/pusBanChat.json";
import { Player } from "@lottiefiles/react-lottie-player";
// import LottiePlayer from "../../../public/assets/lottie/LottiePlayer";

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <div className="">
        <Player src={pusBanChat} loop={true} autoplay={true} className="w-24" />
        <WaveBackground />
        <Footer />
      </div>
    </main>
  );
}
