"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "./Logo";
import { useCart } from "../_context/cartContext";

const TheNavbar = () => {
  const { cart, isHydrated } = useCart();
  let pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="bg-bg sticky top-0 left-0 right-0 z-50">
      <div className="container flex flex-wrap items-center justify-between py-4">
        <Logo />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            mobileNav ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 absolute left-0 w-full right-0 md:static border md:border-0 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => setMobileNav(false)}
                  href={link.href}
                  className={`block py-2 pl-3 pr-4 ${
                    pathname === link.href ? "text-helper" : ""
                  } text-gray-900 rounded md:bg-transparent md:p-0 font-semibold text-lg hover:text-helper transition-all duration-300`}
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              href="/cart"
              className={`block py-2 pl-3 pr-4 ${
                pathname === "/cart" ? "text-helper" : ""
              } text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white relative`}
              aria-current="page"
              onClick={() => setMobileNav(false)}
            >
              <FaCartShopping className="text-2xl" />

              {!isHydrated && cart?.length > 0 ? (
                <span
                  className={`absolute -top-2 -right-2 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm
                ${pathname === "/cart" ? "bg-helper" : "bg-black"}
                `}
                >
                  {cart?.length}
                </span>
              ) : (
                <span
                  className={`absolute -top-2 -right-2 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm
                ${pathname === "/cart" ? "bg-helper" : "bg-black"}
                `}
                >
                  {0}
                </span>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TheNavbar;
