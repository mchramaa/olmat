"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import React from "react";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="flex justify-center -mb-60 ">
      <MouseParallaxContainer
        className="parallax"
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <div className="grid sm:grid-cols-1 pt-20 lg:grid-cols-2 gap-0 md:flex-row px-4 md:px-14 sm:px-6 h-screen">
          <div className="flex flex-col row-start-2 lg:row-start-auto justify-center lg:justify-center lg:pr-11 gap-2">
            <h1 className="text-5xl md:text-8xl lg:text-7xl font-bold font-Adlam text-tema1-0 text-center">
              Coming Soon
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold font-Adlam text-tema1-0 text-center">
              OLMAT 2024
            </h2>

            <div className="grid place-items-center">
              <p className="lg:text-xl mt-[3%]">
                Olimpiade Online di dukung oleh
              </p>
              <a
                href="https://www.sibiti.co.id/"
                target="blank"
                className="pt-2"
              >
                <Image
                  src="assets/sibiti.svg"
                  alt="sibiti"
                  width={100}
                  height={20}
                />
              </a>
            </div>
            <div className="grid place-items-center my-10 py-2 md:my-7 "></div>
          </div>

          <div className="flex flex-col  row-span-1 items-center relative pt-5 lg:px-16 justify-center">
            <div className="absolute z-0">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/paralax/awanBg.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
            <div className="z-10">
              <MouseParallaxChild factorX={0.7} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/maskot.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
            <div className="bottom-[5%] lg:bottom-[20%] absolute z-20">
              <MouseParallaxChild factorX={0.5} factorY={0.5}>
                <Image
                  width={800}
                  height={800}
                  src="/assets/paralax/awanFront.png"
                  alt=""
                />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
    </div>
  );
}
