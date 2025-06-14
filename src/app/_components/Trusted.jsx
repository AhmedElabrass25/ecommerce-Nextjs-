import Image from "next/image";
import React from "react";

const Trusted = () => {
  const logos = [
    { src: "/baseball.png", alt: "Baseball" },
    { src: "/unity.png", alt: "Unity" },
    { src: "/blockchain.png", alt: "Blockchain" },
    { src: "/blockchain (1).png", alt: "BlockChain1" },
    { src: "/car.png", alt: "car" },
  ];
  return (
    <section className="w-100 py-12 bg-bg mb-28">
      <div className="container">
        <div className="title w-full text-center">
          <h1 className="text-md font-bold capitalize text-textColor mb-10">
            trusted by 1000+ companies
          </h1>
        </div>
        <div className="row items-center justify-between">
          {logos.map((logo, index) => (
            <div key={index} className="w-1/5 flex items-center justify-center">
              <Image width={50} height={50} src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
