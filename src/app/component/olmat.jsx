import React from "react";

function Olmat() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-tema2-0 to-white">
      <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none hidden">
        About Us
      </h1>
      <div className="grid ">
        <div className="flex flex-col items-center bg-tema1-0 bg-[url(/assets/olmatText.svg)]">
          <h1 className=" w-fit text-center my-4 text-white text-4xl font-Adlam hover:scale-110 pointer-events-none">
            About Us
          </h1>
          <img
            src="/assets/olmat-logo.png"
            alt="logo olmat"
            className="w-[40%]"
          />
          <h1 className="text-white text-sm my-14 px-7 text-center">
            OLMAT UINSA merupakan olimpiade matematika tingkat Nasional pada
            jenjang SD/MI,SMP/MTs,SMA/MA Berbasis Islam dengan sebaran 18 Rayon
            di seluruh Indonesiaa
          </h1>
        </div>
        <div>
          <img src="/assets/map.svg" alt="map rayon olmat" />
        </div>
      </div>
    </div>
  );
}

export default Olmat;
