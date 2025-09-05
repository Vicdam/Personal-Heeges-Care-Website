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
          Client Profile Management
        </h3>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Client & Care Management
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for connected, personalized care
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Centralize client profiles in one secure place, making it simple for
          caregivers and administrators to access, update, and share essential
          details.
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
              Centralized Client Profile Management
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Keep all client details in one secure profile, making information
              easy to find and share across the care team.
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
              Status Tracking (Active, Leave of Absence, Hospitalized)
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Update and monitor each client’s status to ensure accurate records
              and responsive care in real time.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8">
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
              Secure Document Storage
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Store client files safely in encrypted storage, ensuring
              compliance while keeping documents easy to access.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/feature9.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Contact Directory
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Maintain an up-to-date directory of client contacts for quick
              communication when it matters most.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/feature9.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Saved Addresses
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Save client addresses to simplify visit planning, transportation,
              and emergency responses
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
