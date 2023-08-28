"use client";

import React, { useState } from "react";

const Nav = () => {
  let Links = [
    { name: "Olmat", link: "/" },
    { name: "Event", link: "/" },
    { name: "TImeline", link: "/" },
    { name: "Rayon", link: "/" },
    { name: "Alur Pendaftaran", link: "/" },
  ];

  const [panelOpen, setPanelOpen] = useState(false);
  const navBtn = () => {
    setPanelOpen(!panelOpen);
    document.body.style.overflow = panelOpen ? "auto" : "hidden";
  };

  return (
    <div className="max-w-screen-sm  fixed grid">
      <div className="top-0 left-0 h-[65px] w-screen bg-tema1-0 p-3 flex items-center justify-between z-10">
        <img src="/assets/olmat-logo.png" alt="olmat" className="h-[50px]" />
        <h1 className="font-Adlam text-xl text-white px-3">OLMAT UINSA</h1>
        <button
          onClick={navBtn}
          className="w-[50px] h-[50px] flex flex-col gap-1 items-center justify-center"
        >
          <span className="block w-6 h-1 rounded-full bg-tema3-0 animate-Nav1"></span>
          <span className="block w-7 h-1 rounded-full bg-tema3-0 animate-Nav2"></span>
          <span className="block w-6 h-1 rounded-full bg-tema3-0 animate-Nav1"></span>
        </button>
      </div>

      {/* =========PANEL========== */}
      <div
        className={
          panelOpen
            ? "fixed grid h-[95vh] top-16 bg-tema2-0 w-[80%] justify-end px-8 right-0 transition-all ease-out duration-700"
            : "fixed grid h-[95vh] top-16 bg-tema2-0 w-[80%] justify-center right-[-500px] transition-all ease-in duration-700"
        }
        //    "fixed flex h-screen top-16 bg-tema2-0 w-[80%] justify-center"
      >
        <div className="w-fit h-fit grid justify-end mt-8">
          <button className="mt-2  py-2 px-8 bg-tema1-0 rounded-full text-2xl font-semibold text-white animate-bounce">
            Login
          </button>
          <hr className="bg-tema3-0 h-1 mt-5" />
          <ul className="w-full mt-5 text-2xl  grid gap-5 text-right">
            {Links.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/assets/maskot.png"
          alt="logo olmat"
          className=" absolute bottom-24 left-1/2 -translate-x-1/2 h-40 opacity-30"
        />

        <h1 className="absolute bottom-5 pb-3 text-center justify-center w-full">
          © Copyright by OLMAT 2023
          <br />
          <a
            href="https://www.instagram.com/mch.rama__/"
            target="blank"
            className=" text-xs font-extralight"
          >
            Crafted by @mch.rama__
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Nav;
