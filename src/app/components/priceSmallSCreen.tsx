// components/HeroSection.tsx

import { Check } from "lucide-react";
import router from "next/router";

export default function PricingTableSmall() {
  return (
    <>
      {/* Price table Section */}
      <div className="my-10 md:my-20">
        <h3 className="mb-16 text-4xl font-semibold text-[#141414]">
          Compare all features across plans
        </h3>
        <div className="overflow-x-auto p-6 pt-0">
          <div className="text-start mb-6">
            <p className="text-[#101828] text-xl font-semibold">Micro Plan</p>
            <p className="text[#667085] text-xl">Free</p>
          </div>
          <table className="min-w-full text-center">
            <tbody>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Residences
                </td>
                <td className=" py-4 ">1</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Clients
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Staff / Admin
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Minimum Total Users (Clients and Staff)
                </td>
                <td className=" py-4 ">1</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Storage Capacity (Please comment this out for now)
                </td>
                <td className=" py-4 ">10 Gb</td>
              </tr>
              {/* Core Capacity Section */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Profile Management
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Centralized Client Profile Management
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Status Tracking (Active, Leave of Absence, Hospitalized)
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/* Care Management & Delivery */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Care Management & Delivery
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Complete Health Records
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Vital Signs Recording
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Incident Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Progress Notes
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/* Client Scheduling & Calendars */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Scheduling & Calendars
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Organization-Level Master Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/*  Task & Workflow Management*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Task & Workflow Management
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Task Assignment & Tracking
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/* Operations & Administration*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Operations & Administration
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Residence Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Connect & Communicate*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Connect & Communicate
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence Staff Directory
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  In-App Notifications
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Compliance & Customization*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Compliance & Customization
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Fully PIPEDA-Compliant Data Handling
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Bank-Level Data Security Standards
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customize terms like “Client” and “Residence” to match your
                  organization.
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Support & Training*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Support & Training
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Live Chat
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Onboarding & Training
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Zero Setup Fees
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Free Introductory Session
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Unlimited Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => router.push("/demo")}
            className="mt-10 mb-16 mx-auto flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium w-full"
          >
            Try for free
          </button>
        </div>
        <div className="overflow-x-auto p-6 pt-0">
          <div className="text-start mb-6">
            <p className="text-[#101828] text-xl font-semibold">
              Standard Plan
            </p>
            <p className="text[#667085] text-xl">$7 / User / Month</p>
          </div>
          <table className="min-w-full text-center">
            <tbody>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Residences
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Clients
                </td>
                <td className="py-4 ">15</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Staff / Admin
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Minimum Total Users (Clients and Staff)
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Family Account
                </td>
                <td className=" py-4 ">1 per Client</td>
              </tr>
              {/* <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Storage Capacity (Please comment this out for now)
                </td>
                <td className=" py-4 ">50 Gb</td>
              </tr> */}
              {/* Core Capacity Section */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Profile Management
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Centralized Client Profile Management
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Status Tracking (Active, Leave of Absence, Hospitalized)
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>

              {/* Care Management & Delivery */}
              <tr className=" text-left">
                <td className="py-2 pt-6 font-bold text-[#141414] text-xl">
                  Care Management & Delivery
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Complete Health Records
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Vital Signs Recording
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Built-In BMI Calculator **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Incident Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Progress Notes
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Media upload for Incident Reports and Progress Notes **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/* Client Scheduling & Calendars */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Scheduling & Calendars
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client Appointment Booking & Management *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence-Wide Shared Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Organization-Level Master Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/* Task & Workflow Management*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Task & Workflow Management
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Task Assignment & Tracking
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Quick-View Information Recap Dashboard*
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Pin or Follow Key Residences and Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/* Operations & Administration*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Operations & Administration
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Multi-Residence Management from a Single Dashboard
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Residence Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customizable Monthly & Annual Reports *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Connect & Communicate*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Connect & Communicate
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence Staff Directory
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Agency Controlled Family Access Portal **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  In-App Notifications
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Compliance & Customization*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Compliance & Customization
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Fully PIPEDA-Compliant Data Handling
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Bank-Level Data Security Standards
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customize terms like “Client” and “Residence” to match your
                  organization.
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Client and Residence Archiving
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Support & Training*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Support & Training
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Live Chat
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Onboarding & Training
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Zero Setup Fees
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Free Introductory Session
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Unlimited Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => router.push("/demo")}
            className="mt-10 mb-16 mx-auto flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium w-full"
          >
            Try for free
          </button>
        </div>
        <div className="overflow-x-auto p-6 pt-0">
          <div className="text-start mb-6">
            <span className="rounded-[16px] bg-[#EDFAFF] text-[#0063C6] mix-blend-multiply py-1 px-3 text-sm w-[98px] font-medium block">
              Basic plan
            </span>
            <p className="text-[#101828] text-xl font-semibold mt-2">
              Growth Plan
            </p>
            <p className="text[#667085] text-xl">$12 / User / Month</p>
          </div>
          <table className="min-w-full text-center">
            <tbody>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Residences
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Clients
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Staff / Admin
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Minimum Total Users (Clients and Staff)
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Family Account
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Storage Capacity (Please comment this out for now)
                </td>
                <td className=" py-4 ">100 Gb</td>
              </tr>
              {/* Core Capacity Section */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Profile Management
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Centralized Client Profile Management
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Status Tracking (Active, Leave of Absence, Hospitalized)
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Secure Document Storage*
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Contact Directory for Clients **
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Saved Places for Clients **
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              {/* Care Management & Delivery */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Care Management & Delivery
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Medication Tracking and Administration *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Complete Health Records
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Vital Signs Recording
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Built-In BMI Calculator **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Incident Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Progress Notes
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Media upload for Incident Reports and Progress Notes **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Goal Setting and Progress Tracking *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  My Portal (Staff)**
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Meals Log
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Bath Log
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/* Client Scheduling & Calendars */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Scheduling & Calendars
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client Appointment Booking & Management *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence-Wide Shared Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Organization-Level Master Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/*  Task & Workflow Management*/}
              <tr className="text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Task & Workflow Management
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Task Assignment & Tracking
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Quick-View Information Recap Dashboard*
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Pin or Follow Key Residences and Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Shift Handover (formerly To-Do) *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/* Operations & Administration*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Operations & Administration
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Multi-Residence Management from a Single Dashboard
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Company Wide Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Residence Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Executive Dashboard **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence-Level Document Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customizable Monthly & Annual Reports *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Real-Time On-Call Staff Scheduling and Display
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Connect & Communicate*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Connect & Communicate
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence Staff Directory
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Agency Controlled Family Access Portal **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  In-App Notifications
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Compliance & Customization*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Compliance & Customization
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Fully PIPEDA-Compliant Data Handling
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Bank-Level Data Security Standards
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customize terms like “Client” and “Residence” to match your
                  organization.
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Client and Residence Archiving
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Support & Training*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Support & Training
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Live Chat
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Onboarding & Training
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Zero Setup Fees
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Free Introductory Session
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Unlimited Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => router.push("/demo")}
            className="mt-10 mb-16 w-full btn flex items-center justify-center py-3 px-4 rounded-3xl  font-medium"
          >
            Request a Demo
          </button>
        </div>
        <div className="overflow-x-auto p-6 pt-0">
          <div className="text-start mb-6">
            <h3 className="mb-16 text-4xl font-semibold text-[#141414]">
              Compare all features across plans
            </h3>
            <p className="text-[#101828] text-xl font-semibold mt-2">
              Professional Plan
            </p>
            <p className="text[#667085] text-xl">$18 / User / Month</p>
          </div>
          <table className="min-w-full text-center">
            <tbody>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Residences
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Clients
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Max Number of Staff / Admin
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Minimum Total Users (Clients and Staff)
                </td>
                <td className=" py-4 ">5</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Family Account
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Storage Capacity (Please comment this out for now)
                </td>
                <td className=" py-4 ">Unlimited</td>
              </tr>
              {/* Core Capacity Section */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Profile Management
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-y border-y-[#E2E2E2] font-medium">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Centralized Client Profile Management
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Status Tracking (Active, Leave of Absence, Hospitalized)
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Secure Document Storage*
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Contact Directory for Clients **
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              <tr className="text-base text-[#1F1F1F] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] w-2/6 text-left">
                  Saved Addresses for Clients **
                </td>
                <td className="py-4 text-[#1F1F1F] text-left w-full">
                  <Check className="mx-auto w-5 h-5 " />
                </td>
              </tr>
              {/* Care Management & Delivery */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Care Management & Delivery
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Medication Tracking and Administration *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Complete Health Records
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Vital Signs Recording
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] text-left w-2/3">
                  Built-In BMI Calculator **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Incident Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Progress Notes
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Media upload for Incident Reports and Progress Notes **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Goal Setting and Progress Tracking *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Custom Data Trackers (Finances, Cannabis, Narcotics,
                  Cigarettes) **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  My Portal (Staff)**
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Meals Log
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Bath Log
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/* Client Scheduling & Calendars */}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Client Scheduling & Calendars
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Client Appointment Booking & Management *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Residence-Wide Shared Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Organization-Level Master Calendar *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              {/* Task & Workflow Management*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Task & Workflow Management
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Task Assignment & Tracking
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Quick-View Information Recap Dashboard*
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>

              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Shift Handover (formerly To-Do) *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Maintenance & Repair Requests *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className="py-4 font-medium text-[#141414] w-2/6 text-left">
                  Pin or Follow Key Residences and Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/* Operations & Administration*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Operations & Administration
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Multi-Residence Management from a Single Dashboard
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Company Wide Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Role-Based Residence Announcements *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Executive Dashboard **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence-Level Document Management
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customizable Monthly & Annual Reports *
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Downloadable and Submittable Forms
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Real-Time On-Call Staff Scheduling and Display
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Client Intake Assessments*
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Connect & Communicate*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Connect & Communicate
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Residence Staff Directory
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Agency Controlled Family Access Portal **
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  In-App Notifications
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Compliance & Customization*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Compliance & Customization
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Fully PIPEDA-Compliant Data Handling
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Bank-Level Data Security Standards
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Customize terms like “Client” and “Residence” to match your
                  organization.
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Client and Residence Archiving
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              {/*  Support & Training*/}
              <tr className=" text-left">
                <td className="py-6  text-[#101828] text-xl font-bold">
                  Support & Training
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-y border-y-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Live Chat
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Onboarding & Training
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Zero Setup Fees
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Free Introductory Session
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Unlimited Clients
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Dedicated Account Manager
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  24/7 Support (Chat, Email, & Phone)
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
              <tr className="text-base text-[#141414] border-b border-b-[#E2E2E2]">
                <td className=" py-4 font-medium text-[#141414] text-left">
                  Custom implementation
                </td>
                <td className="flex justify-end items-center py-4">
                  <Check className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => router.push("/demo")}
            className="w-full mt-10 mb-10 flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] text-[#1f1f1f] font-medium"
          >
            Try for free
          </button>
        </div>
      </div>
    </>
  );
}
