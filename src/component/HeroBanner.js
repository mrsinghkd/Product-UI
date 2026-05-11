// HeroSection.jsx

import React from "react";
import { Play, ShoppingBag, ChevronRight, Star } from "lucide-react";

import bgPlant from "../images/bgplant.jpg";
import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant7.png";
import customer from "../images/c4.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#081507]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src={bgPlant}
        alt="background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-60
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,_rgba(110,170,70,0.15),transparent_70%)]
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-[35px] pt-[40px] pb-[80px]">

        {/* ================= TOP SECTION ================= */}
        <div className="flex justify-between">

          {/* LEFT CONTENT */}
          <div className="mt-[40px]">

            {/* Heading */}
            <h1
              className="
                text-white
                text-[92px]
                font-bold
                leading-[92px]
              "
            >
              Earth’s Exhale
            </h1>

            {/* Subtitle */}
            <p
              className="
                text-[#D5D5D5]
                text-[20px]
                leading-[30px]
                mt-[18px]
                w-[620px]
              "
            >
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-[22px] mt-[35px]">

              {/* Buy Button */}
              <button
                className="
                  w-[180px]
                  h-[62px]
                  rounded-[14px]
                  border
                  border-white
                  text-white
                  text-[24px]
                  font-medium
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Buy Now
              </button>

              {/* Play */}
              <div className="flex items-center gap-[14px]">

                <button
                  className="
                    w-[62px]
                    h-[62px]
                    rounded-full
                    border
                    border-white
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Play size={24} fill="white" />
                </button>

                <span className="text-white text-[18px]">
                  Live Demo....
                </span>

              </div>
            </div>

            {/* ================= REVIEW CARD ================= */}
            <div
              className="
                relative
                mt-[120px]
                w-[340px]
                h-[210px]
                rounded-[36px]
                border
                border-[#64715B]
                bg-[#2A3524]/30
                backdrop-blur-sm
                transparent
                overflow-hidden
                p-[24px]
              "
            >
              {/* Curve */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-[120px]
                  h-[120px]
                  border-l
                  border-b
                  border-[#5D6955]
                  rounded-tr-[90px]
                  opacity-60
                "
              />

              {/* User */}
              <div className="flex items-center gap-[16px] relative z-10">

                <img
                  src={customer}
                  alt="customer"
                  className="
                    w-[54px]
                    h-[54px]
                    rounded-full
                    object-cover
                  "
                />

                <div>

                  <h3 className="text-white text-[20px] font-medium">
                    Ronnie Hamill
                  </h3>

                  <div className="flex gap-[2px] mt-[4px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={11}
                        fill="#F5E24A"
                        color="#F5E24A"
                      />
                    ))}
                  </div>

                </div>
              </div>

              {/* Review */}
              <p
                className="
                  text-[#D3D3D3]
                  text-[15px]
                  leading-[24px]
                  mt-[28px]
                  relative
                  z-10
                "
              >
                I can’t express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* ================= RIGHT PRODUCT CARD ================= */}
          <div
            className="
              relative
              w-[512px]
              h-[644px]
              rounded-[48px]
              border
              border-[#66725D]
              bg-[#2A3524]/30
              backdrop-blur-sm
              overflow-hidden
              p-[28px]
            "
          >
            {/* Curve */}
            <div
              className="
                absolute
                top-0
                right-0
                w-[160px]
                h-[160px]
                border-r
                border-t
                border-[#5D6955]
                rounded-bl-[120px]
                opacity-60
              "
            />

            {/* Plant */}
            <img
              src={plant1}
              alt="plant"
              className="
                w-[320px]
                h-[320px]
                object-contain
                mx-auto
                mt-[10px]
              "
            />

            {/* Content */}
            <div className="mt-[20px]">

              <span className="text-[#CFCFCF] text-[18px]">
                Indoor Plant
              </span>

              <div className="flex items-center justify-between mt-[10px]">

                <h2
                  className="
                    text-white
                    text-[42px]
                    font-medium
                    leading-[46px]
                  "
                >
                  Aglaonema plant
                </h2>

                <ChevronRight
                  size={28}
                  color="white"
                  strokeWidth={2}
                />
              </div>

              {/* Button */}
              <button
                className="
                  mt-[28px]
                  w-[180px]
                  h-[58px]
                  rounded-[12px]
                  border
                  border-white
                  text-white
                  text-[22px]
                  font-medium
                "
              >
                Buy Now
              </button>

              {/* Dots */}
              <div className="flex gap-[12px] mt-[30px] ml-[120px]">
                <div className="w-[12px] h-[12px] rounded-full bg-white" />
                <div className="w-[12px] h-[12px] rounded-full bg-white/50" />
                <div className="w-[12px] h-[12px] rounded-full bg-white/50" />
              </div>

            </div>
          </div>
        </div>

        {/* ================= TRENDY PLANTS ================= */}
        <h2
          className="
            text-white
            text-[64px]
            font-bold
            text-center
            mt-[60px]
          "
        >
          Our Trendy plants
        </h2>

        {/* ================= CARD 1 ================= */}
        <div
          className="
            relative
            mt-[50px]
            w-full
            h-[420px]
            rounded-[70px]
            border
            border-[#617059]
            bg-[#2A3524]/30
            backdrop-blur-sm
            overflow-hidden
            flex
            items-center
            px-[70px]
          "
        >
          {/* Plant */}
          <img
            src={plant2}
            alt="plant"
            className="
              w-[420px]
              h-[420px]
              object-contain
            "
          />

          {/* Content */}
          <div className="ml-[70px]">

            <h3 className="text-white text-[52px] font-semibold">
              For Your Desks Decorations
            </h3>

            <p
              className="
                text-[#D4D4D4]
                text-[20px]
                leading-[32px]
                mt-[20px]
                w-[650px]
              "
            >
              I recently added a beautiful desk decoration plant to my workspace,
              and it has made such a positive difference!
            </p>

            <h2 className="text-white text-[58px] font-bold mt-[28px]">
              Rs. 599/-
            </h2>

            {/* Buttons */}
            <div className="flex items-center gap-[18px] mt-[24px]">

              <button
                className="
                  w-[190px]
                  h-[60px]
                  rounded-[12px]
                  border
                  border-white
                  text-white
                  text-[22px]
                "
              >
                Explore
              </button>

              <button
                className="
                  w-[60px]
                  h-[60px]
                  rounded-[12px]
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <ShoppingBag size={24} />
              </button>

            </div>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div
          className="
            relative
            mt-[70px]
            w-full
            h-[420px]
            rounded-[70px]
            border
            border-[#617059]
            bg-[#2A3524]/30
            backdrop-blur-sm
            overflow-hidden
            flex
            items-center
            justify-between
            px-[70px]
          "
        >
          {/* Content */}
          <div>

            <h3 className="text-white text-[52px] font-semibold">
              For Your Desks Decorations
            </h3>

            <p
              className="
                text-[#D4D4D4]
                text-[20px]
                leading-[32px]
                mt-[20px]
                w-[650px]
              "
            >
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </p>

            <h2 className="text-white text-[58px] font-bold mt-[28px]">
              Rs. 399/-
            </h2>

            {/* Buttons */}
            <div className="flex items-center gap-[18px] mt-[24px]">

              <button
                className="
                  w-[190px]
                  h-[60px]
                  rounded-[12px]
                  border
                  border-white
                  text-white
                  text-[22px]
                "
              >
                Explore
              </button>

              <button
                className="
                  w-[60px]
                  h-[60px]
                  rounded-[12px]
                  border
                  border-white
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <ShoppingBag size={24} />
              </button>

            </div>
          </div>

          {/* Plant */}
          <img
            src={plant3}
            alt="plant"
            className="
              w-[380px]
              h-[380px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;