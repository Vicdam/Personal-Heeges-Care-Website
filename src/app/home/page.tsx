// components/HeroSection.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Faq from "../components/faq";
import Slider from "../components/slider";

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
  const [direction, setDirection] = useState<"next" | "prev">("next");

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
    <section className="text-center pt-8 md:pt-28 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[80vh] md:h-[110vh] xl:h-[150vh] text-black ">
      <p className="rounded-[16px] text-sm font-medium md:text-base bg-[#EDFAFF] py-2 px-[10px] inline-flex">
        Automate the Work. Amplify the Care
      </p>
      <h1 className="text-3xl md:text-5xl font-semibold mt-4 text-[#141414] md:leading-[60px] md:w-[670px] md:mx-auto px-4 md:px-0">
        Simplifying Care Management for Residential Care Homes
      </h1>
      <p className="mx-4 mt-4 text-lg md:text-xl text-[#545454] md:w-[670px] md:mx-auto">
        Streamline daily care, simplify documentation, and stay compliant,
        whether you’re a small group home or a large residential agency.
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center mx-4 my-6 md:my-12">
        <a
          href="https://app.heeges.com/signup"
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

      <div className="mx-4 md:mx-10 2xl:ps-30 relative w-90vw 2xl:100vw h-[30vh] md:h-[70vh] xl:h-[85vh] 2xl:h-[95vh]  mt-16 md:mt-20 ">
        <Image
          src="/home-page.png"
          fill
          alt="ratings"
          className="text-center object-cover rounded-2xl"
        />
      </div>
      {/* Logos section */}
      {/* <div
        className=" 
      relative w-full md:h-[160px] mx-auto mt-10 bg-[#F6F6F6] md:block text-center py-6 px-10"
      >
        <p className="text-[#667085] font-medium w-[280px] md:w-auto">
          Join 100+ companies already amplifying care
        </p>
        <div className=" grid grid-cols-3 w-[250px] md:w-5/6 md:flex md:justify-between mt-6 mx-auto">
          <div className="relative w-[97px]">
            <Image
              src="/logo1.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo2.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo3.png"
              alt="ratings"
              width={97}
              height={28}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo4.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo5.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo6.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo7.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
        </div>
      </div> */}
      {/* Feature Section */}
      <div className="mt-20 text-start mx-4 md:mx-10 pb-20 [@media(min-width:465px)_and_(max-width:767px)]:mt-40">
        <p className="text-sm md:text-base font-medium rounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          Features
        </p>
        <h3 className=" text-3xl md:text-4xl font-semibold text-[#101828] mt-3">
          Features specifically made for you
        </h3>
        <div className="flex justify-between leading[30px] ">
          <p className="mt-5 text-xl text-[#667085] md:w-[769px]">
            Built by caregivers and administrators who understand the realities
            of care.
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
                className={`cursor-pointer p-4 pt-12 first:pt-0 border-l-8   transition-all ${
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

          <div className="hidden relative xl:flex flex-col gap-3 w-full">
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
                    className={`transition-all duration-500 flex-shrink-0 w-[550px] rounded-2xl
                     ${
                       idx === 1
                         ? "scale-105 bg-gradient-to-r from-[#0080FF]  to-[#63F17B] p-2 z-20"
                         : "scale-80 opacity-50 grayscale blur-sm h-[200px] w-[600px]"
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
        {/* when you want to add the scale-105 and 80 */}
        <button
          onClick={() => router.push("/features")}
          className="xl:hidden border border-[#D0D5DD] rounded-3xl shadow-[0px 1px 2px 0px rgba(16, 24, 40, 0.05) h-12 font-medium text-[#344054] text-base px-5 w-full mt-12"
        >
          View all features
        </button>
      </div>
      {/* Testimonials Section */}
      <div className="bg-[#F6F6F6] md:bg-[rgba(99,241,123,0.10)] py-10 md:py-10 ">
        <div className="text-start px-4 md:px-10 mb-10 md:mb-16">
          <p className="rounded-2xl text-sm md:text-base bg-[#EDFAFF] py-1 px-3 inline-block">
            Testimonials
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold text-[#101828] mt-3">
            Voices of Success from Satisfied Users.
          </h3>
        </div>

        <Slider />
      </div>
      {/* Industry focus Section */}
      <div className="px-4 py-10 md:py-20  md:px-10 text-start">
        <p className="text-sm md:text-baserounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          Who We Serve
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
              make running your agencies smoother and more efficient.
            </p>
            <a
              href="https://app.heeges.com/signup"
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
