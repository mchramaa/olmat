import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <img src="/assets/maskot.png" alt="maskot" className="w-80" />
        <h1 className="text-4xl font-extrabold mt-6 animate-bounce">
          Cooming Soon !!!
        </h1>
      </div>
    </main>
  );
}
