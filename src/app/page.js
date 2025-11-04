"use client";
import { useState } from "react";

import Image from "next/image";
import Header from "./components/Header";
import Button from "./components/Button";
import Navy from "/navy.png";
import Green from "/green.png";
import Pink from "/pink.png";
import Watch from "/Watch.png";

export default function Home() {
  const [activeImage, setActiveImage] = useState(Navy);

  return (
    <main>
      <Header />
      <section className="m-8">
        <h1>The Perfect Moment Between Past And Future</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={Green}
            color="green"
          />
          <Button
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={Pink}
            color="pink"
          />
          <Button
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={Navy}
            color="navy"
          />
        </div>
        <figure>
          <Image
            src={activeImage}
            style={{ width: "300px", height: "300px" }}
          />
        </figure>

        <div style={{ display: "flex" }}>
          <Image src={Navy} onClick={() => setActiveImage(Navy)} alt="genr" />
          <Image src={Pink} onClick={() => setActiveImage(Pink)} alt="genr" />
          <Image onClick={() => setActiveImage(Green)} src={Green} alt="genr" />
        </div>
      </section>
    </main>
  );
}
