"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
export default function StaffPage() {
  return (
    <section className="md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6 pb-16  md:pb-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">
          Task & Workflow Management
        </h3>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Task & Workflow Management
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for smooth, efficient care delivery.
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Caregivers stay organized and on schedule with streamlined tasks and
          workflows, so they can focus on providing quality, person-centered
          care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/Calender.png"
            alt="calendar"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Task Assignment & Tracking
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Easily assign and track tasks so caregivers stay on top of daily
              responsibilities.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/on-call.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Quick-View Information Recap Dashboard
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Get a quick overview of key client and task information to make
              informed decisions quickly.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/task.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Shift Handover (formerly To-Do)
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Smoothly hand over shifts with clear notes and updates, ensuring
              continuity of care.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/staff-log.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Maintenance & Repair Requests
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Report and track maintenance issues efficiently, keeping the
              environment safe and functional.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/task.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Pin or Follow Key Residences and Clients
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Stay updated on priority residents and clients for focused,
              personalized care.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
