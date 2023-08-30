"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React from "react";

export default function paralax() {
  return (
    <div className="flex bg-gradient-to-t from-tema2-0 to-white justify-center ">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          height: "100vh",
          width: "100%",
          display: "flex",
        }}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.9}
          factorY={0.1}
          style={{
            background: "url(/assets/paralax/awanBg.png)",
            backgroundPositionY: "50%",
            transform: "scale(1.2)",
            position: "absolute",
            filter: "blur(4px) brightness(50%)",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-0 md:flex-row px-4 md:px-14 sm:px-6">
          <div className="flex flex-col row-start-2 lg:row-start-auto justify-start lg:justify-center lg:pr-11">
            <h1 className="text-5xl md:text-8xl lg:text-7xl font-bold font-Adlam text-tema1-0">
              OLMAT UINSA
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold font-Adlam text-tema1-0">
              2023
            </h2>

            <p className=" lg:text-xl mt-[5%]">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident&quot;
            </p>
            <div className="grid place-items-center mt-6 py-2 ">
              <a
                className="py-2 px-8 bg-tema1-0 rounded-full text-2xl  text-white animate-bounce"
                href="https://daftar.olmat-uinsa.com/"
                target="blank"
              >
                Daftar
              </a>
            </div>
          </div>

          <div className="flex flex-col row-span-1 items-center relative lg:px-16 justify-center">
            <div className="absolute ">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <img src="/assets/paralax/awanBg.png" alt="" />
              </MouseParallaxChild>
            </div>
            <MouseParallaxChild factorX={0.7} factorY={0.5}>
              <img src="/assets/maskot.png" alt="" />
            </MouseParallaxChild>
            <div className="bottom-[5%] lg:bottom-[20%] absolute">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <img src="/assets/paralax/awanFront.png" alt="" />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
    </div>
  );
}
