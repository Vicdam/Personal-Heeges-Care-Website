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
          Client Profile Management
        </p>
        <h3 className="text-3xl font-medium text-[#101828]">
          Designed for smarter client management
        </h3>
        <p className="mt-4 md:mt-5 text-[#667085] text-xl md:w-[1150px]">
          Centralize client profiles in one secure place, making it simple for
          caregivers and administrators to access, update, and share essential
          details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 md:mx-10 gap-8">
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="relative h-[300px] overflow-hidden">
            <div className="relative h-[120px] w-[700px]">
              <Image src="/ccp1.png" alt="Image A" width={700} height={120} />
            </div>
            <div className="absolute top-18 left-13 h-[120px] w-[600px]">
              <Image src="/ccp2.png" alt="Image A" width={600} height={120} />
            </div>
          </div>

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
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[300px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/status-tracking.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>

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
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[250px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/secure-storage.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
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
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[250px]">
            <div className="relative h-[160px] w-[700px]">
              <Image
                src="/contact-directory.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={100} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
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
        <div className="col-span-6 bg-[#E2EFF5] rounded-3xl pb-[42px] pt-[30px] ps-4 md:ps-[30px]">
          <div className="overflow-hidden h-[250px]">
            <div className="relative h-[120px] w-[700px]">
              <Image
                src="/Saved-Places.png"
                alt="Image A"
                width={700} // estimate based on col-span
                height={120} // let height scale automatically
                className="h-auto"
              />
            </div>
          </div>
          <div className="text-start pt-8">
            <h3 className="text-[#101828] text-xl font-medium mb-2">
              Saved Places
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
