import React from "react";
import { FaTruck } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <FaTruck className="text-3xl text-btn" />,
      title: "super fast and Free Delivery",
    },
    {
      icon: <MdSecurity className="text-3xl text-btn" />,
      title: "non-contact shipping",
    },
    {
      icon: <GiReceiveMoney className="text-3xl text-btn" />,
      title: "money-back guaranteed",
    },
    {
      icon: <RiSecurePaymentFill className="text-3xl text-btn" />,
      title: "super secure payment system",
    },
  ];
  return (
    <section className="w-100 py-12">
      <div className="container">
        {/* ======================Services=================== */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* اليسار */}
          <div className="w-full md:w-1/4 flex justify-start">
            <ServiceCard service={services[0]} />
          </div>

          {/* الوسط */}
          <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[2]} />
          </div>

          {/* اليمين */}
          <div className="w-full md:w-1/4 flex justify-end">
            <ServiceCard service={services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
