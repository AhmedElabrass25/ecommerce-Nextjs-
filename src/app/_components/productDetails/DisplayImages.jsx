"use client";
import React from "react";
import Image from "next/image";

const DisplayImages = ({ product, selectImage, setSelectImage }) => {
  // ✅ تأكد أن product موجود و image مصفوفة
  if (!product || !Array.isArray(product.image)) return null;

  // ✅ إزالة الصور المكررة حسب رابط الصورة بعد إزالة المسافات الزائدة
  const uniqueImages = [
    ...new Map(product.image.map((img) => [img.url.trim(), img])).values(),
  ];

  return (
    <div className="images w-full md:flex items-center justify-center md:w-1/2 mb-5">
      {/* ✅ الصور الصغيرة (thumbnails) */}
      <div className="smallImages w-1/4 flex flex-row md:flex-col gap-1">
        {uniqueImages.map((img, i) => (
          <Image
            onClick={() => setSelectImage(i)}
            key={img.url || i}
            src={img.url.trim()}
            width={500}
            height={100}
            alt={`Product image ${i + 1}`}
            className={`md:w-full h-[100px] cursor-pointer hover:opacity-80 transition mb-2 ${
              selectImage === i ? "border-2 border-blue-500" : ""
            }`}
          />
        ))}
      </div>

      {/* ✅ الصورة الكبيرة */}
      <div className="bigImage w-full md:w-3/4 h-[200px]">
        {uniqueImages[selectImage] && (
          <Image
            src={uniqueImages[selectImage].url.trim()}
            width={400}
            height={200}
            alt={`Selected product image`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default DisplayImages;
