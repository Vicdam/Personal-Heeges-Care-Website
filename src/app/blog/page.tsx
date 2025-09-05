// components/HeroSection.tsx
"use client";
import Image from "next/image";
import Footer from "../components/Footer";

import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = Array.from({ length: totalPages }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    summary: `This is the summary for blog post ${i + 1}.`,
  }));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <section className="md:pt-24 text-center py-9 h-screen ">
      <div className="md:w-1/2 md:mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold mt-4 text-[#101828] leading-[44px] md:leading-[72px] px-4 md:ps-20 md:w-[769px]">
          Insights That Drive Better Care
        </h1>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] px-4 md:ps-20 pt-2 md:w-[769px]">
          Explore expert advice, practical tips, and the latest trends in care
          management, compliance, and caregiving technology.
        </p>
      </div>
      <h3 className="mx-4 md:mx-10 text-2xl font-semibold mt-4 text-[#141414] pb-8 pt-10  md:pt-20 text-start">
        Recent blog posts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-10">
        <Link
          href="/blog-detail"
          className="pb-12 md:pb-10 rounded-3xl text-start h-[432px]"
        >
          <div className=" relative h-60">
            <Image
              src="/blog1.jpg"
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
        </Link>
        <div className="flex flex-col">
          <div className="text-start grid grid-cols-1 md:grid-cols-2  md:h-[200px] mb-12 md:mb-0">
            <div className="relative h-60 md:h-[200px]">
              <Image
                src="/blog2.jpg"
                fill
                alt="ratings"
                className="rounded-2xl w-full md:w-1/2 object-cover"
              />
            </div>
            <div className="mt-6 md:mt-0 md:ms-6">
              {" "}
              <h5 className=" text-[#101828] text-lg font-semibold">
                How to Streamline Medication Tracking in Residential Homes
              </h5>
              <p className="mt-1 mb-3 text-[#667085]">
                Paper charts are prone to errors. Discover how automation
                improves accuracy, compliance, and peace of mind.
              </p>
              <p className="text-xs font-medium text-[#757575]">
                4 min read • 19 Jun 2025
              </p>
            </div>
          </div>
          <div className="text-start grid grid-cols-1 md:grid-cols-2 md:mt-2 md:h-[200px] mb-12 md:mb-0">
            <div className="relative h-60 md:h-[200px]">
              <Image
                src="/blog4.jpg"
                fill
                alt="ratings"
                className="rounded-2xl w-full md:w-1/2 object-cover"
              />
            </div>
            <div className="mt-6 md:mt-0 md:ms-6">
              {" "}
              <h5 className=" text-[#101828] text-lg font-semibold">
                How to Streamline Medication Tracking in Residential Homes
              </h5>
              <p className="mt-1 mb-3 text-[#667085]">
                Paper charts are prone to errors. Discover how automation
                improves accuracy, compliance, and peace of mind.
              </p>
              <p className="text-xs font-medium text-[#757575]">
                4 min read • 19 Jun 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mx-4 md:mx-10 text-2xl font-semibold mt-4 text-[#141414] pb-8 text-start">
          All blog posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4 md:mx-10">
          <div className="pb-12 md:pb-10 rounded-3xl text-start h-[432px]">
            <div className=" relative h-60">
              <Image
                src="/blog4.jpg"
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
          <div className="pb-12 md:pb-10 rounded-3xl text-start h-[432px]">
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
          <div className="pb-12 md:p-4 md:pb-10 rounded-3xl text-start h-[432px]">
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
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 my-20">
        {/* Prev */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 disabled:text-gray-400"
        >
          <ChevronLeft />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center 
              ${
                page === currentPage
                  ? "border border-[#141414]"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 disabled:text-gray-400"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
