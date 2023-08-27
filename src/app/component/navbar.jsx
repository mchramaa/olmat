"use client";

import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [panelOpen, setPanelOpen] = useState(false);

  const toggleNavbar = () => {
    setPanelOpen(!panelOpen);
    document.body.style.overflow = panelOpen ? "hidden" : "hidden";
  };

  // const [panelOpen, setPanelOpen] = useState(false);
  // document.body.style.overflow = panelOpen ? "hidden" : "hidden";

  return (
    <div className="relative block">
      <div className=" h-[65px] bg-tema1-0 flex items-center relative">
        <img
          src="/assets/olmat-logo.png"
          alt="logo olmat"
          className=" h-14 pl-4"
        />

        <div>
          <button
            onClick={() => {
              toggleNavbar;
              setPanelOpen(!panelOpen);
              document.body.style.overflow = panelOpen ? "hidden" : "hidden";
            }}
            id="tomvolNav"
            className="tombol absolute w-[65px] h-[65px] right-0 top-0 flex items-center justify-center group"
          >
            <label htmlFor="">
              <span className="block w-8 h-1 bg-tema3-0 rounded-md animate-Nav1"></span>
              <span className="block w-8 h-1 bg-tema3-0 rounded-md mt-[5px] mb-[5px] animate-Nav2"></span>
              <span className="block w-8 h-1 bg-tema3-0 rounded-md animate-Nav1"></span>
            </label>
          </button>
        </div>
      </div>

      {/* =======Nav Panel========= */}
      <div
        className={
          panelOpen
            ? "top-0 right-0 absolute w-[300px] h-[100vh] bg-tema2 z-10 bg-tema4-0 duration-700"
            : "-right-[320px] top-0 absolute w-[300px] h-[100vh] bg-tema2 z-10 bg-tema4-0 duration-700 overflow-x-hidden"
        }
      >
        <div className="w-[300px] inline-flex items-center justify-around bg-tema1-0 h-[65px] ">
          <button
            onClick={() => {
              toggleNavbar;
              setPanelOpen(!panelOpen);
              document.body.style.overflow = panelOpen ? "hidden" : "hidden";
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
          <div className="flex flex-col absolute w-[260px] bottom-0 text-center text-sm justify-center items-center">
            <img
              src="/assets/maskot.png"
              alt="logo olmat"
              className="h-40 opacity-30"
            />
            <hr className="rounded-full h-1 w-full bg-tema1-0 mb-2" />
            <h1 className="w-[260px] bottom-0 pb-3 z-40 text-center justify-center ">
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
