"use client";

import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import WaveBackground from "../component/wave";
import LottiePlayer from "../../../public/assets/lottie/LottiePlayer";
import pusBanChat from "../../../public/assets/lottie/pusBanChat.json";

export default function Home() {
  return (
    <main className="bg-white">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          width: "100%",
        }}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave>
        <MouseParallaxChild
          factorX={0.9}
          factorY={0.1}
          style={{
            background: "url(/assets/paralax/awanPink.png)",
            backgroundPositionY: "50%",
            transform: "scale(1.2)",
            position: "absolute",
            filter: "blur(4px) brightness(100%)",
            opacity: "60%",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="fixed top-0 z-40">
          <Nav />
        </div>
        <div className="mt-[65px]">
          <div className=" bg-white grid place-items-center">
            <LottiePlayer animationData={pusBanChat} />
            <h1 className=" text-2xl">Pusat Bantuan</h1>
            <h1 className="font-bold text-xl">
              Hai, ada yang bisa kami bantu ??
            </h1>
          </div>
        </div>
        <WaveBackground />
      </MouseParallaxContainer>
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
