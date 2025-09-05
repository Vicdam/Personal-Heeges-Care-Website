"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
export default function ClientPage() {
  return (
    <section className=" md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6 pb-16  md:pb-10 ">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">
          Connect & Communicate
        </h3>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Connect & Communicate
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for seamless collaboration
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Keep caregivers, clients, and families connected with secure
          messaging, real-time notifications, and shared access to the
          information that matters most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/feature5.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Residence Staff Directory
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Maintain an up-to-date directory of staff for each residence,
              making it easy to connect and coordinate.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/feature7.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Agency Controlled Family Access Portal
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Give families secure, read-only access to relevant client updates
              and care activities, keeping them informed and connected while
              maintaining privacy and control.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/feature8.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              In-App Notifications
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Stay instantly informed with real-time alerts for tasks, updates,
              and important messages, helping caregivers respond quickly and
              stay on top of care.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
