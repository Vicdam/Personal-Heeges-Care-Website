import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <section className="md:pt-24 text-center pt-16 md:py-9 h-screen ">
      <div className="md:w-[668px] 2xl:w-1/2 md:mx-auto text-start text-wrap">
        <h1 className="text-4xl md:text-6xl font-semibold md:mt-4 text-[#101828] leading-[44px] md:leading-[72px] ps-4 md:ps-20">
          Simplifying care so people come first.
        </h1>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] ps-4 md:ps-20 pt-2 overflow-hidden">
          At Heeges Care, we believe caregivers should spend their time with the
          people who need them, not buried in paperwork or chasing scattered
          records.
        </p>
        <p className="text-xl text-[#545454] leading-[30px] ps-4 md:ps-20 pt-5">
          We’re shaping the future of care management with an intuitive,
          automated, and human-centred platform. Whether you run a small
          residential care home or a large agency, Heeges Care streamlines daily
          operations so you can focus on delivering compassionate, high-quality
          care.
        </p>
        <p className="text-xl text-[#545454] leading-[30px] ps-4 md:ps-20 pt-5">
          From progress notes and medication tracking to incident reporting and
          compliance, all your workflows are brought together in one smart,
          secure platform.
        </p>
      </div>
      <div className=" relative w-[356px] h-[201px] md:w-[90vw] md:h-[90vh] mx-auto mt-16 md:mt-20 ">
        <Image
          src="/about.png"
          fill
          alt="ratings"
          className="object-contain rounded-2xl"
        />
      </div>
      <div className="md:w-1/2 mx-4 md:mx-auto text-start mt-16 md:mt-[92px]">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          Why We Exist
        </p>
        <h2 className="text-4xl font-semibold mt-3 text-[#101828] leading-[44px]">
          Because care should feel like care, not chaos.
        </h2>
        <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2">
          We have lived and understand the stress, overwhelm, and burnout that
          come from juggling delicate, complex tasks manually while trying to
          deliver meaningful care. That’s why we built Heeges Care: a system
          designed to truly support the people who support others.
        </p>
        <p className="text-xl text-[#667085] leading-[30px] pt-5">
          With intelligent automation, Heeges Care streamlines daily tasks,
          automates reporting, and enhances the client experience, allowing
          caregivers to focus on what matters most: providing compassionate,
          high-quality care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 my-20">
          <div className=" border-t-[16px] border-[#0c8b22] mb-16 md:mb-0">
            <h2 className="text-4xl font-semibold mt-6 text-[#101828] leading-[44px]">
              Vision Statement
            </h2>
            <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2">
              To revolutionize care management with seamless intelligent
              automation, removing manual processes so all caregivers can
              dedicate their full attention to human connection and delivering
              exceptional care.
            </p>
          </div>
          <div className=" border-t-[16px] border-[#00468c]">
            <h2 className="text-4xl font-semibold mt-6 text-[#101828] leading-[44px]">
              Mission Statement
            </h2>
            <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2">
              Heeges Care empowers residential care homes with smart, intuitive,
              and cost-effective tools that streamline workflows, eliminate
              human errors, and give caregivers more time for attentive,
              personalized care.
            </p>
          </div>
        </div>
      </div>
      {/* Logos section */}
      {/* <div
        className=" 
           hidden relative w-full md:h-[160px] mx-auto mt-10 bg-[#F6F6F6] md:block text-center py-6 px-10"
      >
        <p className="text-[#667085] font-medium w-[280px] md:w-auto">
          Join 100+ companies already amplifying care
        </p>
        <div className=" grid grid-cols-3 w-[280px] md:w-5/6 md:flex md:justify-between mt-6 mx-auto">
          <div className="relative w-[97px]">
            <Image
              src="/logo1.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo2.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo3.png"
              alt="ratings"
              width={97}
              height={28}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo4.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo5.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo6.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
          <div className="relative w-[97px]">
            <Image
              src="/logo7.png"
              alt="ratings"
              width={97}
              height={32}
              className=""
            />
          </div>
        </div>
      </div> */}
      <div className="md:w-1/2 mx-4 md:mx-auto text-start mt-30 mb-[125px]">
        <p className="text-sm md:text-base rounded-2xl bg-[#EDFAFF] py-1 px-3 inline-block">
          What Makes Heeges Care Different
        </p>
        <h2 className="text-4xl font-semibold mt-3 text-[#101828] leading-[44px]">
          We didn’t just guess what caregivers <br /> need, we lived it.
        </h2>
        <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2">
          We understand the daily challenges and specific pain points of every
          user group we serve, from caregivers to client families and business
          owners.
        </p>
        <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2">
          Heeges Care exists to directly address these challenges by removing
          inefficiencies, reducing errors, and eliminating the need for manual
          entry. Every feature is designed to amplify care delivery and make
          workflows smarter.
        </p>
        <p className="text-xl text-[#667085] leading-[30px] pt-5">
          Our platform does not just streamline operations; we save your
          agency’s time and money, enhance safety, support compliance, and keep
          clients and families informed and connected. What truly sets us apart
          is our firsthand understanding of the care environment and our
          unwavering focus on building a system that puts people first, not
          paperwork.
        </p>
      </div>
      {/* Footer Section */}
      <Footer />
    </section>
  );
}
