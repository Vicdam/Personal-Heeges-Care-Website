// components/HeroSection.tsx
"use client";
import PhoneInput from "react-phone-input-2";
import Footer from "../components/Footer";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";

export default function DemoPage() {
  const [phone, setPhone] = useState("");
  return (
    <section className="text-center pt-16 md:pt-28 h-screen ">
      <div className="md:w-1/2 md:mx-auto text-start text-wrap">
        <h1 className="text-4xl md:text-6xl font-semibold md:mt-4 text-[#101828] leading-[44px] md:leading-[72px] ps-4 md:ps-0">
          See Heeges Care in Action
        </h1>
        <p className="mt-4 text-xl text-[#545454] leading-[30px] ps-4 md:ps-0 pt-2 overflow-hidden">
          Discover how Heeges Care can streamline your operations, simplify
          compliance, and elevate the quality of care. Request a live,
          personalized demo tailored to your facility’s needs.
        </p>
        <form>
          <div className="space-y-3 px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-20">
              <div>
                <label className="font-medium text-[#1F1F1F]">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <label className="font-medium text-[#1F1F1F]">
                  Last Name *
                </label>
                <input
                  type="text"
                  name=" lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">
                  Email Address *
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <label className="font-medium text-[#1F1F1F]">
                  Phone number*
                </label>
                <PhoneInput
                  country={"ca"} // Default country set to Canada
                  preferredCountries={["ca", "us", "gb"]}
                  enableSearch={true} // Enables country search in dropdown
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{
                    width: "100%",
                    padding: "24px 16px",
                    borderColor: "#CBCBCB",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="org"
                  placeholder="Input organization name"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">
                  Facility Name
                </label>
                <input
                  type="text"
                  name="facilityName"
                  placeholder="Facility Name"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">
                  Number of Residents*
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Number of Residents"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <label className="font-medium text-[#1F1F1F]">
                  Number of Staffs*
                </label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Number of staffs"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">Role</label>
                <input
                  type="text"
                  name="facilityName"
                  placeholder="input role"
                  className="w-full px-4 py-3 placeholder:text[#757575] placeholder:text-base border border-[#CBCBCB] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="font-medium text-[#1F1F1F]">Message</label>
                <textarea className="w-full border px-4 py-3 rounded-lg placeholder:text[#757575] placeholder:text-base border-[#CBCBCB] focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to be contacted regarding my request.
              </label>
            </div>
          </div>
          <div className="">
            {" "}
            <button className="w-full text-white bg-gradient-to-r from-[#0080FF]  to-[#63F17B] py-[12px] md:px-[20px] hover:bg-blue-700 rounded-lg mt-12 mb-26 md:mx-0">
              Request a Demo
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <Footer />
    </section>
  );
}
