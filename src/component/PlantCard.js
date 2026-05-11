// TopSellingPlants.jsx

import React from "react";
import { ShoppingBag } from "lucide-react";

import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant3.png";
import plant4 from "../images/plant4.png";
import plant5 from "../images/plant5.png";
import plant6 from "../images/plant6.png";

const plants = [
  {
    id: 1,
    title: "Aglaonema plant",
    image: plant1,
    price: "Rs. 300/-",
    desc: `The Aglaonema plant, commonly known as Chinese Evergreenk known for its attractive foliage and ease of care`,
  },
  {
    id: 2,
    title: "Plantain Lilies",
    image: plant2,
    price: "Rs. 380/-",
    desc: `Hostas are primarily grown for their lush, decorative leaves,which come in a wide variety of shapes, sizes,`,
  },
  {
    id: 3,
    title: "Cactus",
    image: plant3,
    price: "Rs. 259/-",
    desc: `It is known for their ability to 
    thrive in arid environments`,

  },
  {
    id: 4,
    title: "Swiss cheese plant",
    image: plant4,
    price: "Rs. 400/-",
    desc: `It is a popular houseplant known for its distinctive, perforated leaves`,
  },
  {
    id: 5,
    title: "Sansevieria plant",
    image: plant5,
    price: "Rs. 450/-",
    desc: `It is a popular indoor plant admired for its striking appearance and low-maintenance nature.`,
  },
  {
    id: 6,
    title: "Agave plant",
    image: plant6,
    price: "Rs. 359/-",
    desc: `The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.`,
  },
];

const TopSellingPlants = () => {
  return (
    <section id="top-selling-plants" className="w-full bg-[#0d1b08] py-[60px] flex flex-col items-center overflow-visible">

      {/* ================= HEADING ================= */}
      <div className="relative inline-block mb-[80px]">

        {/* Left Curve */}
        <div
          className="
            absolute
            left-[12px]
            bottom-[2px]
            w-[90px]
            h-[65px]
            border-l-[5px]
            border-b-[5px]
            border-[#9B9337]
            rounded-bl-[18px]
          "
        />

        {/* Right Curve */}
        <div
          className="
            absolute
            right-[12px]
            top-[4px]
            w-[90px]
            h-[65px]
            border-r-[5px]
            border-t-[5px]
            border-[#9B9337]
            rounded-tr-[18px]
          "
        />

        {/* Heading */}
        <h1
          className="
            text-white
            text-[66px]
            font-bold
            px-[40px]
            leading-none
          "
        >
          Our Top Selling Plants
        </h1>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-3 gap-[32px]">

        {plants.map((plant, index) => (
          <div
            key={plant.id}
            className="
              relative
              w-[512px]
              h-[757px]
              rounded-[52px]
              overflow-visible
              border
              border-[#56614E]
              bg-[#2A3524]/30
              backdrop-blur-sm
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,_rgba(151,201,111,0.13),transparent_70%)]
              "
            />

            {/* Plant Image (larger and overflowing) */}
            <img
              src={plant.image}
              alt={plant.title}
              className="
                absolute
                top-[-40px]
                left-1/2
                -translate-x-1/2
                w-[380px]
                h-[380px]
                object-contain
                z-10
              "
            />

            {/* Content */}
            <div className="relative z-10 px-[40px] pt-[320px] h-[437px] flex flex-col">

              {/* Plant Name */}
              <h2
                className="
                  text-white
                  text-[40px]
                  font-medium
                  leading-none
                "
              >
                {plant.title}
              </h2>

              {/* Description */}
              <p
                className="

                  mt-[50px]
                  text-[#D5D5D5]
                  text-[22px]
                  leading-[32px]
                  whitespace-pre-line
                  font-normal
                "
              >
                {plant.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-auto mt-[34px]">

                {/* Price */}
                <span
                  className="
                    text-white
                    text-[46px]
                    font-medium
                  "
                >
                  {`Rs. ${300 + index * 50}/-`}
                </span>

                {/* Cart Button */}
                <button
                  className="
                    w-[58px]
                    h-[58px]
                    rounded-[14px]
                    border
                    border-[#A4AE9A]
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  <ShoppingBag size={26} strokeWidth={2} />
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TopSellingPlants;