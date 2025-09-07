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
          Client Scheduling & Calendars
        </h3>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Client Scheduling & Calendars
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for effortless, organized care.
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Caregivers stay on top of appointments, activities, and reminders, so
          they can focus on delivering timely, personalized care without missing
          a beat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/residence-calendar.png"
            alt="calendar"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Client Appointment Booking & Management
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Schedule and manage client appointments, keeping caregivers on
              track and clients engaged.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/residence-calendar.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Residence-Wide Shared Calendar
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              See all residence activities and appointments in one view, making
              coordination across the team simple.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <Image
            src="/Organization-Calendar.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Organization-Level Master Calendar
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Get a complete overview of schedules across the entire
              organization to plan and allocate resources efficiently.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
