"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../../loading";
import Error from "../../_components/Error";
import Details from "../../_components/productDetails/Details";
import DisplayImages from "@/app/_components/productDetails/DisplayImages";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectImage, setSelectImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");

  // =========== Fetch Product Details ==========
  async function getSingleProduct() {
    try {
      setIsLoading(true);
      setError("");
      const { data } = await axios.get(
        `https://api.pujakaitem.com/api/products/${productId}`
      );
      setProduct(data);
      setSelectImage(0); // reset selected image on new product
    } catch (error) {
      setError(error?.message || "Failed to fetch product");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (productId) {
      getSingleProduct();
    }
  }, [productId]);
  useEffect(() => {
    if (product?.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="pt-10">
      <div className="container">
        <div className="w-full flex item-start justify-between flex-wrap">
          {/* ======================Dispaly Images======== */}
          <DisplayImages
            product={product}
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
          {/* =============== Details =================== */}
          <Details
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
