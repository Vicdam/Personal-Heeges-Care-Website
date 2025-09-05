// components/HeroSection.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#EDFAFF] pt-10 md:pt-[138px] pb-12 md:px-4">
      <div className=" lg:w-[918px] 2xl:w-[1018px] md:mx-auto">
        <div className="hidden md:flex items-center justify-between">
          <div className="inline-block text-sm font-semibold p-4 text-white rounded-3xl bg-[#00468C] mt-6">
            Save hours of admin time every week.
          </div>
          <div className="inline-block text-sm font-semibold p-4 text-white rounded-3xl bg-[#0C8B22]">
            Reduce errors with automation.
          </div>
        </div>
        <h3 className="text-4xl md:text-7xl text-[#141414] font-semibold mt-2 leading-[44px] md:leading-[72px] md:w-[741px] md:mx-auto">
          Let’s transform your care operations
        </h3>
        <div className="hidden md:flex items-center justify-between mt-3 ms-20">
          <div className="inline-block text-sm font-semibold p-4 text-[#141414] rounded-3xl bg-[#63F17B] mt-6">
            Stay compliant with built-in reports and logs.
          </div>
          <div className="inline-block text-sm font-semibold p-4 text-white rounded-3xl bg-[#0F1B2E]">
            Focus more on care, less on paperwork.
          </div>
        </div>
        <p className="mx-4 mt-4 md:mt-[50px] text-[#141414] text-[20px]">
          We&apos;re on a mission to streamline daily tasks, simplify client
          management, and give your team the tools they need to provide
          exceptional care with one easy-to-use platform.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mx-8 md:mx-0 mt-8 md:mt-[84px] mb-[162px]">
          <a
            href="https://carehomesupport.netlify.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="btn py-[12px] px-[20px] hover:bg-blue-700 w-full md:w-auto mb-2 inline-block text-center"
          >
            14-day free trial
          </a>
          <div className=" rounded-3xl  bg-gradient-to-r from-[#0080FF]  to-[#63F17B] py-[2px] px-[1px] font-medium text-[#1F1F1F] md:ms-3 mt-3 md:mt-0">
            <button
              onClick={() => router.push("/demo")}
              className="cursor-pointer rounded-3xl w-full md:w-auto bg-white py-[12px] px-[20px]"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-10 p-4 md:p-10 bg-[#0F172A] rounded-3xl ">
        <div className="relative mb-10 md:mb-16 h-[40px] w-[93px] md:w-[186px] md:h-[80px]">
          <Image src="/logo2.svg" fill alt="logo" />
        </div>
        <div className="border-b border-[#757575]">
          <div className="md:w-[60%] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5">
              <div className="text-start">
                <p className="text-[#AFAFAF] text-sm font-semibold">Company</p>
                <div className="text-white text-base font-medium flex flex-col">
                  <Link href="/about" className="mt-4">
                    About us
                  </Link>
                  <Link href="/contact" className="mt-4">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="text-start">
                <p className="text-[#AFAFAF] text-sm font-semibold">Product</p>
                <div className="text-white text-base font-medium flex flex-col">
                  <Link href="/home" className="mt-4">
                    Overview
                  </Link>
                  <Link href="/features" className="mt-4">
                    Features
                  </Link>
                  <Link href="/pricing" className="mt-4">
                    Pricing
                  </Link>
                </div>
              </div>
              <div className="text-start">
                <p className="text-[#AFAFAF] text-sm font-semibold">
                  Resources
                </p>
                <div className="text-white text-base font-medium flex flex-col">
                  <Link href="/blog" className="mt-4">
                    Blog
                  </Link>
                  <Link href="/" className="mt-4">
                    Help centre
                  </Link>
                  <Link href="/" className="mt-4">
                    Tutorials
                  </Link>
                  <Link href="/" className="mt-4">
                    Support
                  </Link>
                </div>
              </div>
              <div className="text-start">
                <p className="text-[#AFAFAF] text-sm font-semibold mt-8 md:mt-0">
                  Social
                </p>
                <div className="text-white text-base font-medium flex flex-col">
                  <Link href="/" className="mt-4">
                    Twitter
                  </Link>
                  <Link href="/" className="mt-4">
                    LinkedIn
                  </Link>
                  <Link href="/" className="mt-4">
                    Facebook
                  </Link>
                </div>
              </div>
              <div className="text-start">
                <p className="text-[#AFAFAF] text-sm font-semibold mt-8 md:mt-0">
                  Legal
                </p>
                <div className="text-white text-base font-medium flex flex-col">
                  <Link href="/" className="mt-4">
                    Terms
                  </Link>
                  <Link href="/" className="mt-4">
                    Privacy
                  </Link>
                  <Link href="/" className="mt-4">
                    Cookies
                  </Link>
                  <Link href="/" className="mt-4">
                    Licenses
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[102px] md:h-[400px] my-10 md:my-0">
            <Image
              src="/footer.svg"
              alt="emoji"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between text-[#AFAFAF] mt-8">
          <p className="text-start mt-8">
            © 2025 Heeges Care. All rights reserved.
          </p>
          <div className="flex">
            <Link href="/">Terms</Link>
            <Link href="/" className="ms-4">
              Privacy
            </Link>
            <Link href="/" className="ms-4">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
