"use client";
import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
export default function CareManagementPage() {
  return (
    <section className=" md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6 pb-16  md:pb-10 ">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">
          Care Management & Delivery
        </h3>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Care Management & Delivery
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for connected, personalized care
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Enable caregivers to focus on safe, consistent, person-centered care
          by providing one secure place for everything client care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/Medication.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Medication Tracking and Administration
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Schedule, track, and manage medications to reduce errors and
              ensure clients receive the right care at the right time.
            </p>
          </div>
        </div>
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
              Complete Health Records
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Access accurate and up to date health records in one place, giving
              caregivers the insights needed for safe, informed decisions.
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
              Vital Signs Recording with Built-In BMI Calculator
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Record and track vital signs with instant BMI calculations to
              monitor client health more effectively.
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
              Incident Management
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Log and manage incidents quickly, ensuring accountability,
              accurate reporting, and improved safety.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8">
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
              Progress Note
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Document daily care and observations in clear progress notes that
              keep the entire team informed.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/Medication.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Goal Setting and Progress Tracking
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Set care goals and track progress over time to support
              personalized care and measurable outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8">
        <div className="col-span-6 bg-[#F6F6F6] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <Image
            src="/Medication.png"
            alt="Image A"
            width={600} // estimate based on col-span
            height={314} // let height scale automatically
            className="w-full h-auto contain"
          />
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Custom Data Trackers (Finances, Cannabis, Narcotics, Cigarettes)
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Monitor specialized client data with customizable trackers to
              support safe and compliant care.
            </p>
          </div>
        </div>
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
              My Portal (Staff)
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Personalized staff portal that brings together schedules, tasks,
              due medications, and key resources in chronological order, keeping
              everything that needs attention in one place.
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
              Meal Log
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Track meals and dietary needs to support nutrition management and
              client well-being.
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
              Baths Log
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Record bath schedules to ensure hygiene routines are maintained
              with consistency and care.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
