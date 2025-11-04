"use client";
import { useState } from "react";

import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
// import Navy from "/img/navy.png";
// import Green from "/img/green.png";
// import Pink from "/img/pink.png";

export default function Home() {
  const [activeImage, setActiveImage] = useState("/img/navy.png");

  return (
    <main className="grid grid-cols-[2fr_1fr_auto] grid-rows-[repeat(4,auto)]">
      <Header />
      <div className="flex flex-col justify-center gap-4 text-left text-6xl">
        <h1 className="font-bold">
          The Perfect Moment <br />
        </h1>
        <div className="font-thin">Between Past And Future</div>
      </div>
      <figure className="col-start-2 place-items-center">
        <Image src={activeImage} width={300} height={300} alt="eger" />
      </figure>
      <button className="col-start-1 my-8 justify-self-start rounded-full border-2 px-16 py-2 font-light">
        Buy now
      </button>

      <div className="col-start-1 flex items-center gap-4 self-end justify-self-start">
        <IoIosArrowRoundBack />
        1 <IoIosArrowRoundForward />
      </div>
      <div className="col-start-3 row-start-2 flex flex-col justify-center gap-6">
        <Button
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          relatedImage={"/img/green.png"}
          color="#58D7C4"
        />
        <Button
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          relatedImage={"/img/pink.png"}
          color="#F2CEC6"
        />
        <Button
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          relatedImage={"/img/navy.png"}
          color="#404354"
        />
      </div>

      <div className="col-start-2 flex">
        <Image
          width={300}
          height={300}
          src={"/img/navy.png"}
          onClick={() => setActiveImage("/img/navy.png")}
          alt="genr"
        />
        <Image
          width={300}
          height={300}
          src={"/img/pink.png"}
          onClick={() => setActiveImage("/img/pink.png")}
          alt="genr"
        />
        <Image
          width={300}
          height={300}
          onClick={() => setActiveImage("/img/green.png")}
          src={"/img/green.png"}
          alt="genr"
        />
      </div>
    </main>
  );
}
