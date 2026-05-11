// Navbar.jsx

import React from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";

import logo from "../images/plant.png";

const Navbar = () => {
  return (
    <nav
      className="
        w-full
        h-[90px]
        bg-[#081507]
        flex
        items-center
        justify-between
        px-[40px]
        overflow-hidden
        relative
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[#0d1b08]
        "
      />

      {/* ================= LEFT LOGO ================= */}
      <div className="flex items-center gap-[12px] relative z-10">
        <img
          src={logo}
          alt="logo"
          className="w-[28px] h-[28px] object-contain"
        />

        <h1
          className="
            text-white
            text-[28px]
            font-bold
            leading-none
          "
        >
          FloraVision.
        </h1>
      </div>

      {/* ================= NAV LINKS ================= */}
      <ul
        className="
          flex
          items-center
          gap-[55px]
          text-white
          text-[16px]
          font-normal
          relative
          z-10
        "
      >
        <li
          className="cursor-pointer hover:text-[#9ACD32] transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Home
        </li>

        <li
          className="cursor-pointer hover:text-[#9ACD32] transition-all duration-300"
          onClick={() => document.getElementById('top-selling-plants')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Plants Type
        </li>

        <li
          className="cursor-pointer hover:text-[#9ACD32] transition-all duration-300"
          onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
        >
          More
        </li>

        <li
          className="cursor-pointer hover:text-[#9ACD32] transition-all duration-300"
          onClick={() => document.getElementById('site-footer')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact
        </li>
      </ul>

      {/* ================= RIGHT ICONS ================= */}
      <div className="flex items-center gap-[28px] relative z-10">

        {/* Search */}
        <button className="text-white hover:text-[#9ACD32] transition-all duration-300">
          <Search size={22} strokeWidth={1.8} />
        </button>

        {/* Cart */}
        <button className="text-white hover:text-[#9ACD32] transition-all duration-300">
          <ShoppingBag size={20} strokeWidth={1.8} />
        </button>

        {/* Menu */}
        <button className="text-white hover:text-[#9ACD32] transition-all duration-300">
          <Menu size={26} strokeWidth={1.8} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;