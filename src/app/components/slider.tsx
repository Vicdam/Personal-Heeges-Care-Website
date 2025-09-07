"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    job: "Group Home Administrator",
    image: "/user1.jpg",
    logo: "/logo6.png",
    message:
      "“Heeges Care has completely transformed how we manage our residents. The system is intuitive, and features like Progress Notes and Medication Management save us hours of paperwork every week. It truly helps us focus on what matters most, providing quality care.”",
  },
  {
    id: 2,
    name: "James L.",
    job: "Residential Care Staff",
    image: "/user2.jpg",
    logo: "/logo5.png",
    message:
      '"As a caregiver, I love how easy it is to see which staff members are on call and access client information instantly. Heeges Care makes daily routines smoother and gives me peace of mind knowing everything is organized and up-to-date."',
  },
  {
    id: 3,
    name: "Linda K.",
    job: "Director of Residential Services",
    image: "/user3.jpg",
    logo: "/logo4.png",
    message:
      "“From intake assessments to residence and task setup, Heeges Care has streamlined every part of my workflow. The team now truly understands the realities of care, and it shows in how thoughtful and practical the software is.”",
  },
  {
    id: 4,
    name: "Anita B.",
    job: "Residential Care Staff",
    image: "/user4.jpg",
    logo: "/logo2.png",
    message:
      '"When I heard my agency was switching to Heeges Care, I wondered what was so special to warrant the move. After just a week, I could see why. It’s built for caregivers and makes my daily tasks much easier. I can finally focus on providing care instead of paperwork."',
  },
];

export default function Slider() {
  const [visibleItems, setVisibleItems] = useState(testimonials.slice(0, 3));
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const next = () => {
    setDirection("next");
    const first = testimonials.shift();
    testimonials.push(first!);
    setVisibleItems(testimonials.slice(0, 3));
  };

  const prev = () => {
    setDirection("prev");
    const last = testimonials.pop();
    testimonials.unshift(last!);
    setVisibleItems(testimonials.slice(0, 3));
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex justify-center gap-6 w-full">
        {visibleItems.map((item, idx) => (
          <AnimatePresence mode="wait" custom={direction} key={item.id}>
            <motion.div
              key={item.id}
              custom={direction} // Pass direction directly
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`rounded-2xl shadow p-6 transition-all duration-500 flex-shrink-0 w-[90%] sm:w-[40%] md:w-[40%] lg:w-[40%] 
                ${
                  idx === 1
                    ? " bg-[#00468C] text-white xl:w-[690px]"
                    : " bg-white"
                }`}
            >
              <div className="relative text-start">
                <Image
                  src={item.logo} // Ensure correct path
                  width={100}
                  height={100}
                  alt="company logo"
                />
              </div>
              <p className="mt-2 mb-4 text-start text-lg md:text-2xl md:h-[190px]">
                {item.message}
              </p>
              <div className="flex text-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-[20px] mb-2 me-4 aspect-[1/1] object-contain"
                  priority
                />
                <div>
                  <p className="font-medium text-2xl">{item.name}</p>
                  <p
                    className={`text-base ${
                      idx === 1 ? "text-[#E2E2E2]" : "text-[#757575]"
                    }`}
                  >
                    {item.job}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <div className="flex gap-6 mt-10 items-center justify-center">
        <button
          onClick={prev}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
