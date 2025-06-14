"use client";
import React, { useContext } from "react";
import Hero from "../_components/Hero";
import { productContext } from "../_context/productContext";

const About = () => {
  const { x } = useContext(productContext);
  const data = { name: "ahmed ecommerce" };
  return (
    <div>
      <Hero data={data} />
    </div>
  );
};

export default About;
