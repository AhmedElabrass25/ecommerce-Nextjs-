"use client";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <section className="w-full py-12">
      <h1 className="w-full text-center text-3xl font-semibold capitalize mb-10">
        contact us
      </h1>
      {/* ============== Display Map ============ */}
      <div className="w-full mb-10">
        {isClient && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13685.301617704536!2d31.251559234388047!3d30.961400141942097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a2eaad480117%3A0x283ca478d01a11ff!2z2LPZhdmG2YjYr9iMINmF2K_ZitmG2Kkg2LPZhdmG2YjYr9iMINiz2YXZhtmI2K_YjCDZhdit2KfZgdi42Kkg2KfZhNi62LHYqNmK2KkgNjc4MzUwNA!5e0!3m2!1sar!2seg!4v1748887648378!5m2!1sar!2seg"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        )}
      </div>
      {/* ============== Form ============ */}
      <div className="container">
        <div className="row justify-center mb-10">
          <form
            className="w-full md:w-[500px]"
            action="https://formspree.io/f/xovwqlkq"
            method="POST"
          >
            <div className="mb-5">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-helper"
                placeholder="username"
                name="username"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-helper"
                placeholder="email"
                name="email"
                required
              />
            </div>
            <div className="mb-5">
              <textarea
                id=""
                cols="10"
                rows="5"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 focus:outline-helper"
                placeholder="Message...."
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-btn hover:bg-blue-800 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-helper"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
