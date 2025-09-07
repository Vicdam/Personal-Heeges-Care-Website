import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
export default function OperationPage() {
  return (
    <section className="md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6 pb-16  md:pb-10 ">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">
          Operations & Administration
        </h3>
      </div>
      <div className="pb-10 text-start  mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Simplify operations from the inside out
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for smarter administration
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Give administrators the tools to manage staff, roles, and daily
          operations efficiently, so caregivers can focus on delivering
          high-quality care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/multi.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Multi-Residence Management from a Single Dashboard
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Oversee multiple residences effortlessly with one centralized
              dashboard, giving administrators full visibility and control.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/role-based.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Role-Based Company-Wide and Residence Announcements
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Share important updates across your organization or select
              residence with role-specific targeting, ensuring the right people
              receive the right information.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/executive.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Executive Dashboard
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Give executives and agency leaders a high-level view of
              operations, performance, and key metrics for smarter
              decision-making.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pt-2 md:pt-[30px] pb-[42px] md:pb-0 ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/residence-document.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8 ps-4 md:ps-10">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Residence-Level Document Management
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Securely store, organize, and manage residence-specific documents,
              making compliance and retrieval effortless.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/customizable.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Customizable Monthly & Annual Reports*
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Generate tailored reports to meet agency needs, with flexible
              formatting for monthly and annual reviews.
            </p>
          </div>
        </div>

        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/downloadable.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Downloadable and Submittable Forms
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Enable staff to download, complete, and submit up to date forms
              digitally, reducing paperwork and streamlining workflows.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mt-8 mb-20">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[300px] overflow-hidden">
              <div className="relative h-[120px] w-[700px]">
                <Image
                  src="/real-time1.png"
                  alt="Image A"
                  width={700}
                  height={120}
                />
              </div>
              <div className="absolute top-10 left-5 h-[120px] w-[700px]">
                <Image
                  src="/real-time.png"
                  alt="Image A"
                  width={700}
                  height={120}
                />
              </div>
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Real-Time On-Call Staff Scheduling and Display
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Ensure caregivers know who is available with real-time on-call
              scheduling, making it easy to secure quick coverage and responses
              when needed.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/Assessment.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Client Intake Assessments
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Simplify onboarding with structured intake assessments that
              capture essential client information from day one.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
