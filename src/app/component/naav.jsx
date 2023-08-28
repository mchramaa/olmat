"use client";

import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [panelOpen, setPanelOpen] = useState(false);

  // const tNav = () => {
  //   setPanelOpen(!panelOpen);
  //   document.body.style.overflow = panelOpen ? "hidden" : "hidden";
  // };

  return (
    <div className="overscroll-none relative">
      <div className="h-[65px] bg-tema1-0 flex items-center ">
        <img
          src="/assets/olmat-logo.png"
          alt="logo olmat"
          className=" h-14 pl-4"
        />

        <div>
          <button
            onClick={() => {
              setPanelOpen(!panelOpen);
              document.body.style.overflow = panelOpen ? "auto" : "hidden";
            }}
            id="tomvolNav"
            className="absolute w-[65px] h-[65px] right-0 top-0 "
          >
            <label htmlFor="">
              <span className="block w-8 h-1 bg-tema3-0 rounded-md animate-Nav1"></span>
              <span className="block w-8 h-1 bg-tema3-0 rounded-md mt-[5px] mb-[5px] animate-Nav2"></span>
              <span className="block w-8 h-1 bg-tema3-0 rounded-md animate-Nav1"></span>
            </label>
          </button>
        </div>
        {/* =======Nav Panel========= */}
        <div
          className={
            panelOpen
              ? "absolute top-0 right-0 w-[300px] h-[100vh] bg-tema2 z-10 bg-tema4-0 duration-700"
              : "absolute -right-[300px] top-0 w-0 h-[100vh] bg-tema2 z-10 bg-tema4-0 duration-700 overflow-x-hidden"
          }
        >
          <div className="w-[300px] inline-flex items-center justify-around bg-tema1-0 h-[65px] ">
            <button
              onClick={() => {
                setPanelOpen(!panelOpen);
                document.body.style.overflow = panelOpen ? "auto" : "hidden";
              }}
              id="tomvolNav"
              className=" relative tombol w-[50px] h-[50px] right-0 top-0 flex items-center justify-center group"
            >
              <span
                className={
                  panelOpen
                    ? "absolute block w-8 h-1 bg-tema3-0 rounded-md rotate-45 duration-700"
                    : "absolute block w-8 h-1 bg-tema3-0 rounded-md duration-700"
                }
              ></span>
              <span
                className={
                  panelOpen
                    ? "absolute block w-8 h-1 bg-tema3-0 rounded-md -rotate-45 duration-700"
                    : "absolute block w-8 h-1 bg-tema3-0 rounded-md duration-700"
                }
              ></span>
            </button>
            <h1 className="font-Adlam text-2xl text-tema3-0">OLMAT 2023</h1>
            <img src="/assets/maskot.png" alt="logo olmat" className=" h-11" />
          </div>
          <div className="flex flex-col px-5 items-end justify-start pt-5 h-[100vh]">
            <button className="mt-5 py-2 px-8 bg-tema1-0 rounded-full text-2xl font-semibold text-white animate-bounce">
              Login
            </button>
            <hr className="rounded-full h-1 w-full bg-tema1-0 mt-6" />
            <div className="text-2xl text-tema1-0 grid gap-3 py-4 item justify-center">
              <a className="text-end" href="">
                Olmat
              </a>
              <a className="text-end" href="">
                Event
              </a>
              <a className="text-end" href="">
                Timeline
              </a>
              <a className="text-end" href="">
                Rayon
              </a>
              <a className="text-end" href="">
                Alur Pendaftaran
              </a>
            </div>

            <img
              src="/assets/maskot.png"
              alt="logo olmat"
              className="h-40 opacity-30"
            />

            <h1 className=" bottom-0 pb-3 text-center justify-center ">
              © Copyright by OLMAT 2023
              <br />
              <a
                href="https://www.instagram.com/mch.rama__/"
                target="blank"
                className=" text-xs"
              >
                Crafted by @mch.rama__
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
