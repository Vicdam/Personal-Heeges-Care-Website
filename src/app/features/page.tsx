"use client";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
export default function page() {
  return (
    <section className="md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6  pb-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="mt-4 text-4xl font-semibold text-[#101828]">
          Cutting-edge features
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <Link
          href="features/client-profile"
          className="md:col-span-7 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature1.svg"
            alt="Image A"
            width={700} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start mt-16 md:mt-0">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Client Profile Management
            </h3>
            <p className="text-[#667085] text-lg font-medium">
              Centralized client profiles that bring together essential
              information in one secure place.
            </p>
          </div>
        </Link>

        <Link
          href="features/client-scheduling"
          className="md:col-span-5 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature2.png"
            alt="Image A"
            width={500} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Client Scheduling & Calendars
            </h3>
            <p className="text-[#667085] text-lg font-medium">
              Simplify daily planning by managing client schedules and calendars
              all in one place.
            </p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-4 md:mx-10 gap-8 mb-20 ">
        <Link
          href="features/care-management"
          className="md:col-span-5 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature3.svg"
            alt="Image A"
            width={500} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start mt-16">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Care Management & Delivery
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Comprehensive care tools that streamline documentation, progress
              tracking, and health management
            </p>
          </div>
        </Link>

        <Link
          href="features/task&workflow-management"
          className="cursor-pointer md:col-span-7 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature4.png"
            alt="Image A"
            width={700} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start mt-16">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Task & Workflow Management
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Organize tasks and streamline workflows to keep your team focused
              and efficient.
            </p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <Link
          href="features/operations&administration"
          className="md:col-span-7 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature1.svg"
            alt="Image A"
            width={700} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start mt-16 md:mt-0">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Operations & Administration
            </h3>
            <p className="text-[#667085] text-lg font-medium">
              Streamline admin work, staff management, and reporting to keep
              your operations running smoothly
            </p>
          </div>
        </Link>

        <Link
          href="features/connect&communicate"
          className="md:col-span-5 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature2.png"
            alt="Image A"
            width={500} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Connect & Communicate
            </h3>
            <p className="text-[#667085] text-lg font-medium">
              SFoster seamless communication and collaboration with tools that
              keep staff, clients, and families safe, informed and connected.
            </p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8 mx-4 md:mx-10 gap-8 mb-20 ">
        <Link
          href="features/compliance&customization"
          className="md:col-span-5 bg-[#F6F6F6] rounded-3xl px-4 md:px-6 pt-6 pb-10 md:pb-20"
        >
          <Image
            src="/feature3.svg"
            alt="Image A"
            width={500} // estimate based on col-span
            height={320} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start mt-16">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Compliance & Customization
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Stay compliant with regulations while tailoring the platform to
              fit your agency’s unique needs.
            </p>
          </div>
        </Link>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
