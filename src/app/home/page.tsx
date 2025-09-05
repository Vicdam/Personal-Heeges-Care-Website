// components/HeroSection.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Faq from "../components/faq";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    job: "Group Home Administrator",
    image: "/user2.jpg",
    message:
      "“Heeges Care has completely transformed how we manage our residents. The system is intuitive, and features like Progress Notes and Medication Management save us hours of paperwork every week. It truly helps us focus on what matters most, providing quality care.”",
  },
  {
    id: 2,
    name: "James L.",
    job: "Residential Care Staff",
    image: "/user1.jpg",
    message:
      "As a caregiver, I love how easy it is to see which staff members are on call and access client information instantly. Heeges Care makes daily routines smoother and gives me peace of mind knowing everything is organized and up-to-date.",
  },
  {
    id: 3,
    name: "Linda K.",
    job: "Director of Residential Services",
    image: "/user3.jpg",
    message:
      "“From intake assessments to residence and task setup, Heeges Care has streamlined every part of my workflow. The team now truly understands the realities of care, and it shows in how thoughtful and practical the software is.”",
  },
  {
    id: 4,
    name: "James L.",
    job: "Residential Care Staff",
    image: "/user1.jpg",
    message:
      '"When I heard my agency was switching to Heeges Care, I wondered what was so special to warrant the move. After just a week, I could see why. It’s built for caregivers and makes my daily tasks much easier. I can finally focus on providing care instead of paperwork."',
  },
];
const features = [
  {
    id: 1,
    src: "/feature5.png",
    label: "progress",
    title: "Progress Notes",
    subTitle:
      "Easily record and track client activities, behaviors, and updates in one place, ensuring accurate documentation, and better continuity of care.",
    link: "Client Profile Management",
    url: "features/client-profile",
  },
  {
    id: 2,
    label: "medication",
    src: "/Medication.png",
    title: "Medication Management",
    subTitle:
      "Simplify medication tracking with accurate schedules, reminders, and records, helping caregivers reduce errors and keep clients safe.",
    link: "Care Management & Delivery",
    url: "features/care-management",
  },
  {
    id: 3,
    src: "/on-call.png",
    label: "on-call",
    title: "On-call Scheduling",
    subTitle:
      "See which on-call staff members are on duty in real time, so everyone always knows who to contact for support.",
    link: "Operations & Administration",
    url: "features/operations&administration",
  },
  {
    id: 4,
    src: "/feature7.png",
    label: "incident",
    title: "Incident Management",
    subTitle:
      "Log and track incidents, keeping everyone informed, staying compliant and ensuring client safety.",
    link: "Operations & Administration",
    url: "features/operations&administration",
  },
  {
    id: 5,
    src: "/Assessment.png",
    label: "assessment",
    title: "Intake Assessment",
    subTitle:
      "Capture client information, medical history, and care needs to ensure accurate placement and personalized care from day one.",
    link: "Compliance & Customization",
    url: "features/compliance&customization",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0); // Center one as active
  const router = useRouter();
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

  const getVisibleImages = () => {
    const prev = (activeIndex - 1 + features.length) % features.length;
    const next = (activeIndex + 1) % features.length;
    return [features[prev], features[activeIndex], features[next]];
  };
  const slideVariants: Variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="text-center px-4 pt-16 md:pt-28 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[70vh] md:h-screen text-black ">
      <p className="rounded-[16px] text-sm font-medium md:text-base bg-[#EDFAFF] py-2 px-[10px] inline-flex">
        Automate the Work. Amplify the Care
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold mt-4 text-[#141414] leading-[44px] md:leading-[60px] md:w-[670px] md:mx-auto">
        Simplifying Care Management for Residential Care Homes
      </h1>
      <p className="mx-4 mt-4 text-lg md:text-xl text-[#545454] md:w-[670px] md:mx-auto">
        Streamline daily care, simplify documentation, and stay compliant,
        whether you’re a small group home or a large residential agency.
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center mx-4 my-8 md:my-12">
        <a
          href="https://carehomesupport.netlify.app/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn py-[12px] px-[20px] hover:bg-blue-700 w-full md:w-auto mb-2 inline-block text-center"
        >
          14-day free trial
        </a>

        <div className=" rounded-3xl  bg-gradient-to-r from-[#0080FF]  to-[#63F17B] py-[2px] px-[1px] font-medium text-[#1F1F1F] md:ms-3 mt-3 md:mt-0">
          <button
            className="cursor-pointer rounded-3xl w-full md:w-auto bg-white py-[12px] px-[20px]"
            onClick={() => router.push("/demo")}
          >
            Request a Demo
          </button>
        </div>
      </div>
      <div className="hidden md:flex gap-6 items-center justify-center">
        <div className="flex flex-col">
          <div className="relative h-8 md:inline-block">
            <Image src="/googleLogo.png" width="98" height="32" alt="ratings" />
          </div>
          <div className="relative h-10 md:inline-block pt-2">
            <Image src="/starLogo.png" width="100" height="40" alt="ratings" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-8 md:inline-block">
            <Image src="/capterra.svg" width="98" height="32" alt="ratings" />
          </div>
          <div className="relative h-10 md:inline-block pt-2">
            <Image src="/starLogo.png" width="100" height="40" alt="ratings" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative h-8 md:inline-block">
            <Image src="/trustLogo.png" width="98" height="32" alt="ratings" />
          </div>
          <div className="relative h-10 md:inline-block pt-2">
            <Image src="/starLogo.png" width="100" height="40" alt="ratings" />
          </div>
        </div>
      </div>

      <div className=" relative w-[356px] h-[201px] md:w-[90vw] md:h-[90vh] mx-auto mt-16 md:mt-20 ">
        <Image
          src="/home-page.png"
          fill
          alt="ratings"
          className="object-contain"
        />
      </div>
      <div className="md:hidden relative w-full h-[280px] mx-auto mt-6 bg-[#EDFAFF] px-6 flex flex-col items-center justify-center">
        <p className="text-[#667085] font-medium">
          Join 100+ companies already amplifying care
        </p>
        <div className="relative mx-auto">
          <Image
            src="/smalllogos.png"
            alt="ratings"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto object-contain mt-6"
          />
        </div>
      </div>
      <div
        className=" 
      hidden  relative w-full h-[128px] mx-auto mt-10 bg-[#EDFAFF] md:block text-center py-6 px-10"
      >
        <p className="text-[#667085] font-medium">
          Join 100+ companies already amplifying care
        </p>
        <div className="relative">
          <Image
            src="/Logos.png"
            alt="ratings"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain mt-6"
          />
        </div>
      </div>
      {/* Feature Section */}
      <div className="mt-20 text-start mx-4 md:mx-10 pb-[80px]">
        <p className="text-sm md:text-base font-medium rounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          Features
        </p>
        <h3 className=" text-3xl md:text-4xl font-semibold text-[#101828] mt-3">
          Features specifically made for you
        </h3>
        <div className="flex justify-between leading[30px] ">
          <p className="mt-5 text-xl text-[#667085] md:w-[769px]">
            Should be Built by caregivers and administrators who understand the
            realities of care.
          </p>
          <button
            onClick={() => router.push("/features")}
            className="hidden xl:inline-block border border-[#D0D5DD] rounded-3xl shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05) h-12 font-medium text-[#344054] text-base px-5"
          >
            View all features
          </button>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-12 md:mt-14 overflow-hidden gap-24">
          <div className="">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`cursor-pointer p-4 pt-8 first:pt-0 border-l-8   transition-all ${
                  activeIndex === index
                    ? "border-[#0C8B22] rounded-lg"
                    : "border-[#F6F6F6]"
                }`}
              >
                <p className="text-[#101828] font-medium text-[20px]">
                  {feature.title}
                </p>
                <p className="text-[#667085]">{feature.subTitle}</p>
                {/* <Link
                  href={feature.url}
                  className="text-[#0063C6] font-medium mt-5 cursor-pointer"
                >
                  {feature.title} &#10132;
                </Link> */}
              </div>
            ))}
          </div>

          <div className="hidden relative md:flex flex-col gap-6 w-full">
            {getVisibleImages().map((image, idx) => {
              return (
                <AnimatePresence key={image.id} mode="wait">
                  <motion.div
                    key={image.id}
                    initial={{
                      y: direction === "next" ? 100 : -100,
                      opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: direction === "next" ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`transition-all duration-500 flex-shrink-0 w-[610px] rounded-2xl
                     ${
                       idx === 1
                         ? "scale-105 bg-gradient-to-r from-[#0080FF]  to-[#63F17B] p-2 z-20"
                         : "scale-80 opacity-50 grayscale blur-sm"
                     }`}
                  >
                    <Image
                      src={image.src}
                      alt={`Image ${idx}`}
                      width={200}
                      height={200}
                      className="w-fit h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => router.push("/features")}
          className="xl:hidden border border-[#D0D5DD] rounded-3xl shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05) h-12 font-medium text-[#344054] text-base px-5 w-full mt-12"
        >
          View all features
        </button>
      </div>
      {/* Testimonials Section */}
      <div className="bg-[#F6F6F6] md:bg-[rgba(99,241,123,0.10)] py-10 md:py-[96px] ">
        <div className="text-start px-4 md:px-10 mb-10 md:mb-16">
          <p className="rounded-2xl text-sm md:text-base bg-[#EDFAFF] py-1 px-3 inline-block">
            Testimonials
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#101828] mt-3">
            Voices of Success from Satisfied Users.
          </h3>
        </div>

        <div className="w-full overflow-hidden">
          <div className="relative flex justify-center gap-6 w-full">
            {visibleItems.map((item, idx) => (
              <AnimatePresence mode="wait" custom={direction} key={item.id}>
                <motion.div
                  key={item.id}
                  custom={direction} // Pass direction directly
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`rounded-2xl shadow p-6 transition-all duration-500 flex-shrink-0 w-[90%] sm:w-[45%] md:w-[40%] lg:w-[40%] 
                ${
                  idx === 1
                    ? "md:scale-100 bg-[#00468C] text-white xl:w-[712px]"
                    : "md:scale-90 bg-white"
                }`}
                >
                  <div className="relative text-start">
                    <Image
                      src="/testLogo.svg" // Ensure correct path
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
          <div className="flex gap-6 mt-16 items-center justify-center">
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
      </div>
      {/* Industry focus Section */}
      <div className="px-4 py-10 md:py-20  md:px-10 text-start">
        <p className="text-sm md:text-baserounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          Industry Focus
        </p>
        <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-[#101828]">
          Empowering Everyone in the Care Journey
        </h3>
        <p className="mt-5 text-[#667085] text-xl leading-[30px] md:w-[769px]">
          Heeges Care is designed to meet your unique operational challenges, so
          you can focus on what matters most
        </p>
        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="py-8 px-6 bg-[#0F1B2E] text-[#D2D2C8] rounded-3xl md:h-[272px] h-[350px] md:mt-10">
            <p className=" text-[30px]">Agency Owners</p>
            <p className=" text-base mt-4">
              Gain full visibility into your operations, ensure compliance, and
              track care quality effortlessly, all on one platform designed to
              make running your homes smoother and more efficient.
            </p>
            <a
              href="https://carehomesupport.netlify.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center cursor-pointer mt-8 border border-[#fff] rounded-3xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] h-[40px] w-[96px] font-medium text-white text-sm text-center"
            >
              Sign up <ChevronRight size={20} />
            </a>
          </div>
          <div className="py-16 px-6 mt-[25px] md:mt-0 md:ms-[25px] bg-[linear-gradient(90deg,_#0080FF_-6.6%,_#63F17B_149.98%)] text-[#141414] rounded-3xl h:[500px] md:h-[340px] scale-100">
            <p className=" text-4xl">Caregivers</p>
            <p className=" text-base mt-6">
              Simplify your daily routine with streamlined access to client
              info, tasks, and handovers. Spend less time on paperwork and more
              time delivering the care your clients deserve.
            </p>
            <Link
              href="/demo"
              className="flex items-center justify-center cursor-pointer mt-10 border border-[#fff] bg-white rounded-3xl shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05) h-[40px] w-[133px] font-medium  text-sm text-center"
            >
              Book a Demo <ChevronRight size={20} />
            </Link>
          </div>
          <div className="py-8 px-6 mt-[25px] md:ms-[25px] bg-[#0F1B2E] text-[#D2D2C8] rounded-3xl md:h-[272px] h-[350px] md:mt-10">
            <p className=" text-[30px]"> Families & Guardians</p>
            <p className=" text-base mt-4">
              Stay connected to your loved one’s care with controlled updates
              and insights, giving you peace of mind while respecting privacy
              and agency protocols.
            </p>
            <button
              onClick={() => router.push("/demo")}
              className="flex items-center justify-center cursor-pointer mt-8 border border-[#fff] rounded-3xl shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05) h-[40px] w-[180px] font-medium text-white text-sm text-center"
            >
              Show how it works <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* faq Section */}
      <Faq />
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
