"use client";
import React from "react";
import Hero from "../_components/Hero";
import Services from "../_components/Services";
import Trusted from "../_components/Trusted";
import FeaturesServices from "../_components/FeaturesServices";

const Home = () => {
  const data = { name: "ahmed store" };

  return (
    <div>
      <Hero data={data} />
      <FeaturesServices />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
