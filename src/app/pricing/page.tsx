// components/HeroSection.tsx
"use client";
import Image from "next/image";

import Footer from "../components/Footer";
import PricingTableLarge from "../components/priceLargeSCreen";
import PricingTableSmall from "../components/priceSmallSCreen";
import { useRouter } from "next/navigation";
import Faq from "../components/faq";
import PricingCalculator from "../components/price";
export default function PricingPage() {
  const router = useRouter();

  return (
    <section className="text-center pt-16 md:pt-24 h-screen ">
      <p className="text-sm md:text-base rounded-[16px] bg-[#EDFAFF] mix-blend-multiply py-2 px-[10px] inline-flex">
        Pricing
      </p>
      <h1 className="mx-4 text-4xl md:text-5xl font-semibold mt-4 text-[#141414] leading[44px] md:leading-[60px] md:w-[768px] md:mx-auto">
        Great care starts with a plan
      </h1>
      <p className="mx-4 md:mx-0 mt-4 text-xl text-[#545454]">
        Join 100+ residential care agencies already amplifying care with Heeges
        Care.
      </p>

      <PricingCalculator />

      {/* Plan Section */}

      <div className=" bg-[#EDFAFF] rounded-3xl flex flex-col items-center justify-center mx-4 md:my-20 md:mx-10">
        <p className="mt-10 text-[#1F1F1F] text-[26px] font-medium">
          Want to customize your plan?
        </p>
        <button
          onClick={() => router.push("/demo")}
          className="cursor-pointer btn mt-6 mb-10 flex items-center justify-center py-3 px-5 rounded-3xl font-medium"
        >
          Request a Demo
        </button>
      </div>
      {/* Price table Section */}
      <div className="md:hidden">
        <PricingTableSmall />
      </div>
      <div className="hidden md:block">
        <PricingTableLarge />
      </div>
      <Faq />
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
