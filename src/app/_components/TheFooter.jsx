import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const TheFooter = () => {
  return (
    <footer className="w-full relative">
      {/* ================Subscribe Button=========== */}
      <div className="mt-28">
        <div className="container static md:absolute md:top-[-90px] left-0 right-0">
          {/* ===========Get start========== */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex items-center justify-between flex-wrap w-full md:w-[700px] bg-bg py-10 px-5 rounded-md ">
              <div className="text-black mb-3 sm:mb-0">
                <p>Ready to get started ?</p>
                <p>Talk to us today</p>
              </div>
              <Button> get started</Button>
            </div>
          </div>
        </div>
      </div>
      {/* ================Main Footer================= */}
      <main className="w-full bg-footer_bg text-white pt-16">
        <div className="container mx-auto px-4 pb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* العمود الأول */}
            <div className="w-full md:w-1/4">
              <h6 className="font-semibold text-lg mb-2">
                <Logo />
              </h6>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium architecto ipsam mollitia nostrum.
              </p>
            </div>

            {/* العمود الثاني */}
            <div className="w-full md:w-1/4">
              <p className="font-semibold mb-2">Subscribe to get updates</p>
              <form className="flex flex-col gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md text-black focus:outline-btn focus:border-0"
                />
                <Button>Subscribe</Button>
              </form>
            </div>

            {/* العمود الثالث */}
            <div className="w-full md:w-1/4">
              <p className="font-semibold text-lg mb-2 tracking-[1px]">
                Follow us
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/ahmed-elabrass-712451347"
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl text-btn hover:text-[#402ff1] transition-all ease-linear duration-300" />
                </Link>
                <Link
                  href={"https://github.com/AhmedElabrass25"}
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-white"
                  target="_blank"
                >
                  <FaGithub className="text-2xl text-btn hover:text-[#402ff1] transition-all ease-linear duration-300" />
                </Link>
                <Link
                  href="https://wa.me/201208448553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full flex items-center justify-center bg-white"
                >
                  <ImWhatsapp className="text-2xl text-btn hover:text-[#402ff1] transition-all ease-linear duration-300" />
                </Link>
              </div>
            </div>

            {/* العمود الرابع */}
            <div className="w-full md:w-1/4">
              <p className="font-semibold text-lg mb-2 tracking-[1px]">
                Call us
              </p>
              <p className="p-2 bg-btn text-white rounded-md w-fit">
                01208448553
              </p>
            </div>
          </div>
        </div>
        {/* ======================Bottom Footer===================== */}
        <p className="text-center text-sm py-5 border-t border-gray-800">
          © {new Date().getFullYear()} Ahmed store by{" "}
          <span className="font-semibold text-helper"> Ahmed Elabrass</span> ❤️.
        </p>
      </main>
    </footer>
  );
};

export default TheFooter;
