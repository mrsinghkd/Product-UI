// TestimonialCard.jsx

import React from "react";
import { Star } from "lucide-react";

import customer1 from "../images/c1.png";
import customer2 from "../images/c2.jpg";
import customer3 from "../images/c3.png";

const reviews = [
  {
    id: 1,
    name: "Shelly Russel",
    image: customer1,
    review: `Just got my hands on some
absolutely awesome plants, and I
couldn't be happier!`,
  },
  {
    id: 2,
    name: "Lula Rolfson",
    image: customer2,
    review: `Each one has its own unique charm
and personality, and they've
already started brightening up my
space. The vibrant colors and fresh
greenery make such a huge
difference in my home.`,
  },
  {
    id: 3,
    name: "Carol Huels",
    image: customer3,
    review: `It's like bringing a little piece of
nature indoors. Definitely worth the
investment—my plant collection
has never looked better!`,
  },
];

const TestimonialCard = () => {
  return (
    <div id="testimonials" className="w-full bg-[#0d1b08] py-[70px] flex flex-col items-center">

      {/* Heading */}
      <div className="relative mb-[70px]">

        {/* Left Curve */}
        <div
          className="
            absolute
            left-[6px]
            bottom-[3px]
            w-[70px]
            h-[54px]
            border-l-[4px]
            border-b-[4px]
            border-[#A89B38]
            rounded-bl-[18px]
          "
        />

        {/* Right Curve */}
        <div
          className="
            absolute
            right-[6px]
            top-[14px]
            w-[70px]
            h-[52px]
            border-t-[4px]
            border-r-[4px]
            border-[#A89B38]
            rounded-tr-[18px]
          "
        />

        <h1 className="text-white text-[56px] font-bold px-[28px]">
          Customer Review
        </h1>
      </div>

      {/* Cards */}
      <div className="flex gap-[18px]">

        {reviews.map((item) => (
          <div
            key={item.id}
            className="
              relative
              w-[500px]
              h-[370px]
              rounded-[42px]
              overflow-hidden
              border
              border-[#55614D]
              bg-[#2B3524]/30
              px-[28px]
              pt-[48px]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,_rgba(161,201,110,0.13),transparent_70%)]
              "
            />

            {/* Top Right Curve */}
            <div
              className="
                absolute
                top-0
                right-0
                w-[200px]
                h-[200px]
                border-t
                border-r
                border-[#58624F]
                rounded-bl-[140px]
                opacity-60
              "
            />

            {/* Bottom Left Curve */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-[200px]
                h-[200px]
                border-l
                border-b
                border-[#58624F]
                rounded-tr-[140px]
                opacity-60
              "
            />

            {/* Content */}
            <div className="relative z-10">

              {/* Profile */}
              <div className="flex items-center gap-[20px]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    align-middle
                    w-[62px]
                    h-[62px]
                    rounded-full
                    object-cover
                  "
                />

                <div>

                  {/* Name */}
                  <h2 className="text-white text-[24px] font-semibold leading-none">
                    {item.name}
                  </h2>

                  {/* Stars */}
                  <div className="flex gap-[2px] mt-[6px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={13}
                        fill="#F5E24A"
                        color="#F5E24A"
                        strokeWidth={1}
                      />
                    ))}
                  </div>

                </div>
              </div>

              {/* Review */}
              <p
                className="
                  text-[#D3D3D3]
                  text-[18px]
                  leading-[28px]
                  whitespace-pre-line
                  mt-[65px]
                  font-normal
                "
              >
                {item.review}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TestimonialCard;