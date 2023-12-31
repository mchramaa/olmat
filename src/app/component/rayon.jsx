import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

function Rayon() {
  let regions = [
    {
      region: "Rayon Bandung",
      nameAll: "Nita Putri Amelia",
      name: "Nita",
      telp: "6285785597036",
    },
    {
      region: "Rayon Banyumas",
      nameAll: "Annafi Irsyadia",
      name: "Annafi",
      telp: "6285335135500",
    },
    {
      region: "Rayon Cirebon",
      nameAll: "Urwatul Wusqo",
      name: "urwatul",
      telp: "6285748017943",
    },
    {
      region: "Rayon Jabodetabek",
      nameAll: "Inayatul Ainiyah",
      name: "Inayatul",
      telp: "628563857238",
    },
    {
      region: "Rayon Jember",
      nameAll: "Rizka Purwaningsih",
      name: "Rizka",
      telp: "6281515163522",
    },
    {
      region: "Rayon Kalimantan",
      nameAll: "Aqilla Diyaul Auliya",
      name: "Aqilla",
      telp: "6281339503812",
    },
    {
      region: "Rayon Kediri",
      nameAll: "Asyita Farikha Difani",
      name: "Asyita",
      telp: "6285748948357",
    },
    {
      region: "Rayon Lamongan",
      nameAll: "Chussila Fajri",
      name: "Chussila",
      telp: "6285607776929",
    },
    {
      region: "Rayon Madiun",
      nameAll: "Zaimatul Ghefira",
      name: "Zaimatul",
      telp: "6281357045529",
    },
    {
      region: "Rayon Madura",
      nameAll: "Ummi Kulsum",
      name: "Ummi",
      telp: "6285963106144",
    },

    {
      region: "Rayon Malang",
      nameAll: "Ima Hikmatur",
      name: "Ima",
      telp: "628975787733",
    },

    {
      region: "Rayon Papua-Bali",
      nameAll: "Shizukana Desurya",
      name: "Shizukana",
      telp: "628977473555",
    },
    {
      region: "Rayon Ponorogo",
      nameAll: "Marlina Lussy Amelia",
      name: "Marlina",
      telp: "6281238632175",
    },
    {
      region: "Rayon Semarang",
      nameAll: "Dea Miftha Amalia",
      name: "Dea",
      telp: "6288221647335",
    },
    {
      region: "Rayon Sulawesi",
      nameAll: "Hana Faizatul Mufidah",
      name: "Hana",
      telp: "6282232579099",
    },
    {
      region: "Rayon Sumatera",
      nameAll: "Naila Rahmatillah",
      name: "Naila",
      telp: "6287750273623",
    },
    {
      region: "Rayon Surabaya",
      nameAll: " Anissa Ragilia Putri",
      name: "Anissa",
      telp: "6287774091926",
    },
    {
      region: "Rayon Yoygyakarta",
      nameAll: "Laila Saffira Ramadhina",
      name: "Laila",
      telp: "6285707276348",
    },
  ];
  return (
    <div className="grid bg-white items-center">
      <div className="flex items-center justify-center">
        <h1 className=" w-fit text-center text-tema1-0 text-4xl font-Adlam border-b-tema3-0 border-b-4 hover:scale-110 pointer-events-none">
          Rayon
        </h1>
      </div>

      <div className="grid gap-4 md:px-6 md:grid-cols-2 md:gap-6 lg:px-20 lg:grid-cols-3 items-center justify-center mt-7">
        {regions.map((rayon) => (
          <a
            key={rayon.name}
            className="flex items-center justify-between bg-white drop-shadow-md rounded-full px-3 transition hover:scale-105 hover:bg-tema4-0  "
            href={`https://api.whatsapp.com/send/?phone=${rayon.telp}&text=Hai+kak+${rayon.name}%2C+saya+dari+${rayon.region}&type=phone_number&app_absent=0`}
            target="blank">
            <TfiLocationPin size={"25px"} color="#95204D" />

            <div className="mx-4 lg:mx-0">
              <h1 className="font-bold text-center text-tema1-0 ">
                {rayon.region}
              </h1>
              <h2 className="text-sm text-center">{rayon.nameAll}</h2>
            </div>
            <BsWhatsapp size={"25px"} color="#95204D" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Rayon;
