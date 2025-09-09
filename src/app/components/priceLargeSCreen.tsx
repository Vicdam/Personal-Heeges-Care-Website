// components/HeroSection.tsx
"use client";
import { Check, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useNavbar } from "./navbarContext";

export default function PricingTableLarge() {
  const router = useRouter();
  const tableRef = useRef<HTMLDivElement | null>(null);
  const { setShowTableNavbar } = useNavbar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setShowTableNavbar(entries[0].isIntersecting); // ✅ correct function
      },
      { threshold: 0.1 }
    );

    if (tableRef.current) observer.observe(tableRef.current);

    return () => {
      if (tableRef.current) observer.unobserve(tableRef.current);
    };
  }, [setShowTableNavbar]);
  return (
    <>
      {/* Price table Section */}
      <div className="my-10 md:my-20">
        <h3 className="mb-16 text-4xl font-semibold text-[#141414]">
          Compare all features across plans
        </h3>
        <div ref={tableRef} className="p-6 md:pt-16">
          <table className="min-w-full text-center">
            <thead className=" bg-white shadow z-100">
              <tr className=" text-[#141414] text-xl">
                <th className="p-4 w-2/6"></th>
                <th className="p-4 text-xl pt-6">
                  Micro
                  <span className="block text-[#757575] text-base">Free</span>
                </th>
                <th className="p-4 pt-6">
                  Standard
                  <span className="block text-[#757575] text-base">
                    $7 / User / Month
                  </span>
                </th>
                <th className="p-4 pt-1">
                  <span className="rounded-[16px] bg-[#EDFAFF] mix-blend-multiply py-1 px-3 text-sm w-[140px] mx-auto font-medium block">
                    Most Popular
                  </span>
                  Growth
                  <span className="block text-[#757575] text-base">
                    $12 / User / Month
                  </span>
                </th>
                <th className="p-4 pt-6">
                  Professional
                  <span className="block text-[#757575] text-base">
                    $18 / User / Month
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Residences
                </td>
                <td className="p-3 py-4 ">1</td>
                <td className="p-3 py-4 ">5</td>
                <td className="p-3 py-4">Unlimited</td>
                <td className="p-3 py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Clients
                </td>
                <td className="p-3 py-4 ">5</td>
                <td className="p-3 py-4 ">15</td>
                <td className="p-3 py-4">Unlimited</td>
                <td className="p-3 py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Staff / Admin
                </td>
                <td className="p-3 py-4 ">5</td>
                <td className="p-3 py-4 ">Unlimited</td>
                <td className="p-3 py-4">Unlimited</td>
                <td className="p-3 py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Minimum Total Users (Clients and Staff)
                </td>
                <td className="p-3 py-4 ">1</td>
                <td className="p-3 py-4 ">5</td>
                <td className="p-3 py-4">5</td>
                <td className="p-3 py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Family Account
                </td>
                <td className="p-3 py-4 ">
                  {" "}
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4 ">1 per Client</td>
                <td className="p-3 py-4">Unlimited</td>
                <td className="p-3 py-4 ">Unlimited</td>
              </tr>

              {/* Client Profile Management */}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Client Profile Management
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Centralized Client Profile Management
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Status Tracking (Active, Leave of Absence, Hospitalized)
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Secure Document Storage*
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Contact Directory for Clients **
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Saved Places for Clients **
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              {/* Care Management & Delivery */}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Care Management & Delivery
                </td>
              </tr>

              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Medication Tracking and Administration *
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Complete Health Records
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Vital Signs Recording
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Built-In BMI Calculator **
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Incident Management
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Progress Notes
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Media upload for Incident Reports and Progress Notes **
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Goal Setting and Progress Tracking *
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Custom Data Trackers (Finances, Cannabis, Narcotics,
                  Cigarettes) **
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  My Portal (Staff)**
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Meals Log
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Bath Log
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/* Client Scheduling & Calendars */}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Client Scheduling & Calendars
                </td>
              </tr>

              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client Appointment Booking & Management *
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence-Wide Shared Calendar *
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF] " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Organization-Level Master Calendar *
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-[#1F1F1F]">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/*  Task & Workflow Management*/}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Task & Workflow Management
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Task Assignment & Tracking
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Quick-View Information Recap Dashboard*
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Shift Handover (formerly To-Do) *
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Maintenance & Repair Requests *
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Pin or Follow Key Residences and Clients
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/* Operations & Administration*/}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Operations & Administration
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Multi-Residence Management from a Single Dashboard
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Role-Based Company Wide Announcements *
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Role-Based Residence Announcements *
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Executive Dashboard **
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence-Level Document Management
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Customizable Monthly & Annual Reports *
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Downloadable and Submittable Forms
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Real-Time On-Call Staff Scheduling and Display
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client Intake Assessments*
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              {/* Connect & Communicate*/}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Connect & Communicate
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence Staff Directory
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Agency Controlled Family Access Portal **
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  In-App Notifications
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/* Compliance & Customization*/}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Compliance & Customization
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Fully PIPEDA-Compliant Data Handling
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Bank-Level Data Security Standards
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Customize terms like “Client” and “Residence” to match your
                  organization.
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client and Residence Archiving
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              {/* Support & Training*/}
              <tr className=" text-left pt-10">
                <td className="px-3 pt-16 pb-6 font-medium text-[#141414] text-2xl w-2/6">
                  Support & Training
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Live Chat
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Onboarding & Training
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Zero Setup Fees
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Free Introductory Session
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Unlimited Clients
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>

                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Dedicated Account Manager
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  24/7 Support (Chat, Email, & Phone)
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left">
                  Custom implementation
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>

                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Minus className="mx-auto w-5 h-5 text-[#AFAFAF]" />
                </td>
                <td className="p-3 py-4 text-center">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#141414]">
                <td className="p-3 py-4 font-medium text-[#141414] w-2/6 text-left"></td>
                <td className="p-3 py-4">
                  <a
                    href="https://app.heeges.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] w-11/12 text-[#1f1f1f] font-medium"
                  >
                    Try for Free
                  </a>
                </td>

                <td className="p-3 py-4 text-center">
                  <a
                    href="https://app.heeges.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] w-11/12 text-[#1f1f1f] font-medium"
                  >
                    Try for Free
                  </a>
                </td>
                <td className="p-3 py-4 text-center">
                  <a
                    href="https://app.heeges.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center justify-center cursor-pointer w-11/12 py-4 px-5 mx-auto"
                  >
                    Try for Free
                  </a>
                </td>
                <td className="p-3 py-4 text-center">
                  <a
                    href="https://app.heeges.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] w-11/12 text-[#1f1f1f] font-medium"
                  >
                    Try for Free
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
