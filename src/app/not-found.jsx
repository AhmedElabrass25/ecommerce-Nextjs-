import React from "react";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-2">الصفحة غير موجودة</p>
      <p className="text-gray-500 mb-6">
        عذرًا، لم نتمكن من العثور على الصفحة التي طلبتها.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        العودة إلى الصفحة الرئيسية
      </a>
    </div>
  );
};

export default Notfound;
