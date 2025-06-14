import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="w-full max-w-sm flex flex-col items-center justify-center bg-bg rounded-lg p-6 shadow-sm hover:shadow-md transition text-center">
        <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-white text-2xl text-primary">
          {service.icon}
        </div>
        <h4 className="text-lg font-medium capitalize">{service.title}</h4>
      </div>
    </>
  );
};

export default ServiceCard;
