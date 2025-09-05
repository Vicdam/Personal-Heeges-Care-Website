// components/HeroSection.tsx
"use client";
import Image from "next/image";
import Footer from "../components/Footer";

export default function BlogDetailPage() {
  return (
    <section className="md:pt-24 text-center pt-16 md:py-9 h-screen ">
      <div className="md:w-1/2 mx-auto text-start">
        <h1 className="text-4xl md:text-5xl font-semibold mt-4 text-[#101828] leading-[44px] md:leading-[72px] px-4 md:ps-20">
          How to Streamline Medication Tracking in Residential Homes
        </h1>
        <p className="mt-4 text-xl text-[#667085] leading-[30px] px-4 md:ps-20 pt-2">
          Paper charts are prone to errors. Discover how automation improves
          accuracy, compliance, and peace of mind.
        </p>
        <p className="font-medium text-[#757575] px-4 md:ps-20 pt-6">
          4 min read • 19 Jun 2025
        </p>
      </div>
      <div className=" relative h-[240px] md:h-[770px] mx-4 md:mx-10 mt-16 mb-[50px]">
        <Image
          src="/blog1.jpg"
          fill
          alt="ratings"
          className="object-cover rounded-3xl w-full"
        />
      </div>
      <div className="md:w-1/2 md:mx-auto text-start px-4 md:ps-20">
        <p className="mt-4 text-xl text-[#667085] leading-[30px] pt-2 pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta,
          aut labore magnam excepturi beatae vitae provident dolorum ea
          inventore omnis eaque corrupti, obcaecati minus ipsum voluptatum
          tenetur nisi architecto!
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="688"
          height="1"
          viewBox="0 0 688 1"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M688 1H0V0H688V1Z"
            fill="#E4E7EC"
          />
        </svg>
        <div>
          <h3 className="text-[#101828] text-[30px] font-semibold mt-12">
            Introduction
          </h3>
          <p className="text-lg text-[#667085] leading-[28px] pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            possimus voluptate unde, quisquam ut et cum molestiae veritatis
            ipsam. Accusamus voluptatem, atque illo molestiae aliquid quod?
            Nulla vero consectetur vel cum ab officiis. Nostrum, sint earum.
            Atque quidem ex tenetur?
          </p>
          <p className="text-lg text-[#667085] leading-[28px] pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            voluptas dolorem magnam consectetur illo a blanditiis, esse
            repudiandae! Ullam minus nostrum itaque labore voluptate? Officia
            perspiciatis similique ipsa tempore cumque animi, rerum fuga ipsam
            laudantium facilis nulla earum inventore iure? A rerum, corrupti
            labore accusantium quod sunt beatae omnis corporis? Doloremque amet
            unde maiores, placeat ea ducimus repellat culpa laborum dignissimos
            accusamus necessitatibus nisi quo distinctio officia earum natus
            nobis impedit fuga. Suscipit quod odio quos quibusdam saepe
            aspernatur dolores maiores beatae accusamus expedita! Commodi est
            incidunt cum facilis officiis quia, deleniti, minima fugit
            aspernatur corporis explicabo tempora at autem!
          </p>
        </div>
      </div>
      <div className="mt-20 text-start mx-4 md:mx-10">
        <h5 className=" text-[#101828] text-[36px] font-semibold mt-3">
          Lastest blog posts
        </h5>
        <p className="mt-2 mb-16 text-[#667085] text-xl">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-10 mb-20">
        <div className="pb-10 rounded-3xl text-start h-[432px]">
          <div className=" relative h-60">
            <Image
              src="/blog2.jpg"
              fill
              alt="ratings"
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <h5 className="mt-4 text-[#101828] text-2xl font-semibold">
            How to Streamline Medication Tracking in Residential Homes
          </h5>
          <p className="mt-1 mb-3 text-[#667085] text-lg">
            Paper charts are prone to errors. Discover how automation improves
            accuracy, compliance, and peace of mind.
          </p>
          <p className="text-xs font-medium text-[#757575]">
            4 min read • 19 Jun 2025
          </p>
        </div>
        <div className="pb-10 rounded-3xl text-start h-[432px]">
          <div className=" relative h-60">
            <Image
              src="/blog3.jpg"
              fill
              alt="ratings"
              className="object-cover rounded-2xl w-full"
            />
          </div>
          <h5 className="mt-4 text-[#101828] text-2xl font-semibold">
            How to Streamline Medication Tracking in Residential Homes
          </h5>
          <p className="mt-1 mb-3 text-[#667085] text-lg">
            Paper charts are prone to errors. Discover how automation improves
            accuracy, compliance, and peace of mind.
          </p>
          <p className="text-xs font-medium text-[#757575]">
            4 min read • 19 Jun 2025
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
