// components/CarouselRTG.tsx
import React, { useState, useRef } from "react";
import Image from "next/image";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Item = {
  id: number;
  message: string;
  image: string;
  name: string;
  job: string;
};

const ITEMS: Item[] = [
  {
    id: 1,
    name: "Sarah M.,",
    job: "Group Home Administrator",
    image: "/user1.jpg",
    message:
      "“Heeges Care has completely transformed how we manage our residents. The system is intuitive, and features like Progress Notes and Medication Management save us hours of paperwork every week. It truly helps us focus on what matters most, providing quality care.”",
  },
  {
    id: 2,
    name: "Bob Smith",
    job: "Software Engineer",
    image: "/user2.jpg",
    message:
      '"Reliable, secure, and user-friendly, this product streamlined our documentation..."',
  },
  {
    id: 3,
    name: "Clara Lee",
    job: "UX Designer",
    image: "/user3.jpg",
    message:
      '"We saw immediate improvement in staff coordination and maintenance reporting..."',
  },
];

export default function CarouselRTG() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const len = ITEMS.length;
  const visibleItems = [
    ITEMS[(index - 1 + len) % len],
    ITEMS[index],
    ITEMS[(index + 1) % len],
  ];

  const next = () => {
    setDirection("next");
    setIndex((i) => (i + 1) % len);
  };

  const prev = () => {
    setDirection("prev");
    setIndex((i) => (i - 1 + len) % len);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex justify-center gap-6 w-full">
        <TransitionGroup className="flex justify-center gap-6 w-full">
          {visibleItems.map((item, idx) => {
            // ✅ Create a ref for each item
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const nodeRef = useRef<HTMLDivElement>(null);

            return (
              <CSSTransition
                key={item.id}
                nodeRef={nodeRef} // 👈 fixes findDOMNode issue
                classNames={direction === "next" ? "slide-next" : "slide-prev"}
                timeout={500}
              >
                <div
                  ref={nodeRef} // 👈 attach ref here
                  className={`carousel-item rounded-2xl shadow p-6 transition-all duration-500 flex-shrink-0 w-[90%] sm:w-[45%] md:w-[40%] lg:w-[40%] 
                    ${
                      idx === 1
                        ? "md:scale-100 bg-[#00468C] text-white xl:w-[712px]"
                        : "md:scale-90 bg-white"
                    }`}
                >
                  <div className="relative text-start">
                    <Image
                      src="/testLogo.svg"
                      width={140}
                      height={40}
                      alt="company logo"
                    />
                  </div>

                  <p className="my-10 text-start text-3xl">{item.message}</p>

                  <div className="flex text-start">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-[20px] mb-2 me-4"
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
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>

      <div className="flex gap-6 mt-16 items-center justify-center">
        <button
          onClick={prev}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      {/* same CSS animations as before */}
      <style jsx global>{`
        .carousel-item {
          will-change: transform, opacity;
        }
        .slide-next-enter {
          transform: translateX(100%);
          opacity: 0;
        }
        .slide-next-enter-active {
          transform: translateX(0%);
          opacity: 1;
          transition: transform 500ms ease-in-out, opacity 500ms;
        }
        .slide-next-exit {
          transform: translateX(0%);
          opacity: 1;
        }
        .slide-next-exit-active {
          transform: translateX(-100%);
          opacity: 0;
          transition: transform 500ms ease-in-out, opacity 500ms;
        }

        .slide-prev-enter {
          transform: translateX(-100%);
          opacity: 0;
        }
        .slide-prev-enter-active {
          transform: translateX(0%);
          opacity: 1;
          transition: transform 500ms ease-in-out, opacity 500ms;
        }
        .slide-prev-exit {
          transform: translateX(0%);
          opacity: 1;
        }
        .slide-prev-exit-active {
          transform: translateX(100%);
          opacity: 0;
          transition: transform 500ms ease-in-out, opacity 500ms;
        }
      `}</style>
    </div>
  );
}
