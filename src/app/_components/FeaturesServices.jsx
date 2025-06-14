import React from "react";
import { useProductContext } from "../_context/productContext";
import ProductCard from "./ProductCard";
import Loading from "../loading";
import Error from "./Error";
const FeaturesServices = () => {
  const { products, error, isLoading } = useProductContext();
  let featuresServices = products?.filter(
    (product) => product?.featured === true
  );
  //   console.log(featuresServices);
  return (
    <section className="bg-bg py-10 mb-10">
      <div className="container">
        <div className="title">
          <h6 className="uppercase text-md tracking-[0.5] text-helper font-medium">
            check now !
          </h6>
          <h2 className="text-3xl font-medium capitalize">
            our feature services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 bg-bg">
          {isLoading && <Loading />}
          {error && <Error error={error} />}
          {featuresServices?.map((product) => (
            <ProductCard product={product} key={product?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesServices;
