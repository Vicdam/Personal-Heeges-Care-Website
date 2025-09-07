import React from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
export default function CompliancePage() {
  return (
    <section className="md:pt-24 text-center  h-screen text-black ">
      <div className="mt-16 md:mt-6 pb-16  md:pb-10 ">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Features
        </p>
        <h3 className="text-4xl font-semibold text-[#101828]">
          Compliance & Customization
        </h3>
        <p className="mt-5">Designed for flexible, compliant care</p>
      </div>
      <div className="pb-10 text-start mx-4 md:mx-10">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 mb-4 px-3 inline-block">
          Compliance & Customization
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Stay audit-ready, always
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Ensure your agency meets regulations while tailoring workflows and
          settings to your unique needs, keeping care both safe and adaptable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] ps-[30px]">
          <div className="relative w-[301px] h-[2500px] md:w-90 md:h-[300px]  mx-auto mt-14 md:mt-10 mb-[44px]">
            <Image
              src="/fully.png"
              alt="image"
              fill
              className="w-full object-cover"
            />
          </div>

          <div className="text-start">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Fully PIPEDA-Compliant Data Handling
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Protect client information with data practices that meet Canada’s
              privacy regulations, ensuring confidentiality and trust.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] ps-[30px]">
          <div className="relative w-[301px] h-[2500px] md:w-90 md:h-[300px]  mx-auto mt-14 md:mt-10 mb-[44px]">
            <Image
              src="/bank-level.png"
              alt="image"
              fill
              className="w-full object-cover"
            />
          </div>

          <div className="text-start">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Bank-Level Data Security Standards
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Keep sensitive information safe with advanced encryption and
              security measures on par with financial institutions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8 mb-20 mt-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] px-4 md:px-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/flexible.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={120} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Flexible Terminology Settings
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Customize terms like “Client”, “Residence” and “Staff” to match
              the language and preferences of your organization.
            </p>
          </div>
        </div>
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] md:pb-42px pt-2 md:pt-[30px]">
          <div className="relative h-[300px] overflow-hidden">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/client1.png"
                alt="Image A"
                width={700}
                height={120}
              />
            </div>
            <div className="absolute top-12 left-10 h-[120px] w-[700px]">
              <Image
                src="/client2.png"
                alt="Image A"
                width={700}
                height={120}
              />
            </div>
          </div>
          <div className="text-start pt-8 ps-4 md:ps-10">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Client and Residence Archiving
            </h3>
            <p className="text-[#667085] text-[18px] font-medium">
              Archive inactive clients and residences securely while keeping
              records accessible for future reference or compliance.
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
