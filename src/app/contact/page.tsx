// components/HeroSection.tsx
"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
export default function ContactPage() {
  const router = useRouter();
  return (
    <section className="md:pt-24 text-center pt-16 md:py-9 h-screen ">
      <div className="md:w-1/2 xl:w-[668px] 2xl:w-1/2 md:mx-auto text-start">
        <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-[#101828] leading-44px md:leading-[72px] ps-4 md:ps-20 md:width-[769px]">
          Get in touch!
        </h1>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] px-4 md:ps-20 pt-2">
          Have questions? Want to see how Heeges Care can make a difference for
          your organization? We’d love to hear from you.
        </p>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] px-4 md:ps-20 pt-2">
          Our team is here to support you whether you’re running a residential
          care agency, considering a partnership, or simply exploring what’s
          possible.
        </p>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] px-4 md:ps-20 pt-2">
          Let’s simplify care together. Contact us today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 my-16 md:mx-10 md:my-20">
        <div className="p-4 pb-10 rounded-3xl bg-[#F6F6F6] text-start">
          <div className=" relative h-60">
            <Image
              src="/support.jpg"
              fill
              alt="ratings"
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <h5 className="mt-4 text-[#101828] text-2xl">Technical Support</h5>
          <p className="mt-1 mb-3 text-[#667085] text-lg md:h-[112px]">
            If you&apos;re already a Heeges Care customer and need assistance,
            reach our 24/7 Customer Care team.
          </p>
          <button
            onClick={() => router.push("/demo")}
            className="flex mt-10 py-[10px] px-4 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium cursor-pointer"
          >
            Get support <ChevronRight />
          </button>
        </div>
        <div className="p-4 pb-10 rounded-3xl bg-[#F6F6F6] text-start">
          <div className=" relative h-60">
            <Image
              src="/contact2.png"
              fill
              alt="ratings"
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <h5 className="mt-4 text-[#101828] text-2xl">Talk to Sales</h5>
          <p className="mt-1 mb-3 text-[#667085] text-lg md:h-[112px]">
            New to Heeges Care and interested in learning more? Book a free demo
            or ask us anything about how Heeges Care can support your care
            agency.
          </p>
          <button
            onClick={() => router.push("/demo")}
            className="flex mt-10 py-[10px] px-4 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium cursor-pointer"
          >
            Contact Us <ChevronRight />
          </button>
        </div>
        <div className="p-4 pb-10 rounded-3xl bg-[#F6F6F6] text-start">
          <div className=" relative h-60">
            <Image
              src="/contact.png"
              fill
              alt="ratings"
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <h5 className="mt-4 text-[#101828] text-2xl">Book a Demo</h5>
          <p className="mt-1 mb-3 text-[#667085] text-lg md:h-[112px]">
            Want to see Heeges Care in action? Get in touch with our expert for
            a free demo.
          </p>
          <button
            onClick={() => router.push("/demo")}
            className="cursor-pointer flex mt-10 py-[10px] px-4 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium"
          >
            Request Demo <ChevronRight />
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Location
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">Head Office</h3>
      </div>
      <div className=" relative h-[329px] md:h-[488px] mx-auto md:mt-[80px] ">
        <Image src="/map.png" fill alt="ratings" className="object-contain" />
      </div>
      <div className="px-4 md:px-0 md:mt-20 text-[#545454] text-base md:text-xl font-medium mb-24">
        <p className="text-[#101828]">
          We are a remote-first company, but you can occasionally find some of
          us at
        </p>
        <p className="mt-4">10665 Jasper Avenue Edmonton Alberta T5J 3S9</p>
        <p className="mt-4">+1 587 988 5584</p>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
