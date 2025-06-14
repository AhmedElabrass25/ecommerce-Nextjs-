import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = ({ data }) => {
  const { name } = data;
  return (
    <section className="py-20 pt-10 md:pt-20">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h6 className="uppercase text-md mb-1 tracking-[0.5] text-helper font-semibold">
              welcome to
            </h6>
            <h2 className="capitalize text-5xl mb-4 font-semibold">{name}</h2>
            <p className="text-black/80 mb-5 w-[80%] font-normal text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              beatae aspernatur dicta ipsa repellendus, odio quidem illo saepe
              voluptatem corrupti nemo voluptatum. Exercitationem eveniet omnis,
              accusamus saepe aut beatae assumenda!
            </p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-btn text-white hover:bg-blue-700 transition rounded-md"
            >
              Shop Now
            </Link>
          </div>
          <div className="w-full md:w-1/2 md:flex items-center justify-end">
            <div className="w-full h-full md:max-w-[600px] relative">
              <Image
                src="/hero.jpg"
                width={500}
                height={500}
                alt="hero"
                className="w-full h-full object-cover relative z-[1]"
              />
              <div className="absolute top-[-20px] left-[-20px] md:top-[-25px] md:left-[-25px] w-[60%] h-full bg-helper z-[0]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
