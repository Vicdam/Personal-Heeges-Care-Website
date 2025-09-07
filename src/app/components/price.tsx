"use client";

import { useState } from "react";

export default function PricingCalculator() {
  const [users, setUsers] = useState(5); // default 5
  const [isDiscount, setIsDiscount] = useState(true); // toggle state
  const [error, setError] = useState(""); // error message

  // Plans
  const plans = [
    {
      name: "Micro",
      rates: { on: 0, off: 0 },
      features: [
        "Centralized Client Profile",
        "Complete Health Records",
        "Client Status Tracking",
        "Vital Signs Management",
        "Progress Notes",
        "Incident Management",
        "Task Management",
        "Organization-Level Calendar",
        "Residence Staff Directory",
        "Role-Based Residence Announcements",
        "Fully PIPEDA-Compliant Data Handling",
        "Customize terms to match your organization.",
      ],
    },
    {
      name: "Standard",
      rates: { on: 7, off: 9 },
      features: [
        "Everything in Micro Plus",
        "Client Appointment Management",
        "Information Recap Dashboard",
        "Media Upload in Documentations",
        "Built-In BMI Calculator",
        "Pin & Follow Key Residences and Clients",
        "Residence Calendar",
        "Multi-Residence Management",
        "Client and Residence Archiving",
        "Agency Managed Family Access Portal",
        "Customizable Monthly & Annual Reports",
      ],
    },
    {
      name: "Growth",
      rates: { on: 12, off: 15 },
      features: [
        "Everything in Standard Plus",
        "Medication Management",
        "Meal & Bath Logs",
        "Clients Contact Directory",
        "Clients Saved Places",
        "Client Goal Setting",
        "My Portal (Staff)",
        "Shift Handover",
        "Real-Time On-Call Scheduling and Display",
        "Role-Based Company Announcements",
        "Residence-Level Document Management",
        "Secure Client Document Storage*",
        "Executive Dashboard",
      ],
    },
    {
      name: "Professional",
      rates: { on: 18, off: 22 },
      features: [
        "Everything in Growth Plus",
        "Client Intake Assessments",
        "Custom Forms and Trackers",
        "Download and Submit Forms",
        "Maintenance & Repair Management",
        "Maintenance Manager Account",
        "Custom Implementation",
        "24/7 Support (Chat, Email, & Phone)",
        "Dedicated Account Manager",
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (value < 5) {
      setError("Minimum of 5 users required");
      setUsers(value); // allow typing but invalid
    } else {
      setError("");
      setUsers(value);
    }
  };

  return (
    <div className=" mx-auto mt-12 p-6 ">
      {/* User Input */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <div className="flex flex-col items-center gap-4">
          <label className="text-lg font-medium">
            What’s your total user count (clients and staff)?
          </label>
          <input
            type="number"
            value={users}
            onChange={handleChange}
            className={` border rounded-md px-3 py-2 text-center focus:outline-none focus:ring-2 ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
      <p className="text-sm text-[#141414]">
        All paid plans start with a minimum of 5 users
      </p>
      <p className="text-sm text-[#141414]">Pricing is in CAD.</p>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-10 mt-10">
        <button
          onClick={() => setIsDiscount(!isDiscount)}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
            isDiscount ? "bg-[#12C530]" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isDiscount ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
        <span className=" text-[#141414]">Pay annually to save up to 20%</span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-[#E2E2E2] rounded-3xl mx-4 md:mx-10">
        {plans.map((plan) => {
          const rate = isDiscount ? plan.rates.on : plan.rates.off;
          const total = users >= 5 ? rate * users : 0;

          return (
            <div
              key={plan.name}
              className="text-start border-r border-r-[#E2E2E2] border-b border-b-[#E2E2E2] last:border-0"
            >
              <div className="text-center border-b border-b-[#E2E2E2] pt-0 pb-6">
                {plan.name === "Growth" && (
                  <div className="py-2 px-3 flex items-center justify-center bg-[#EDFAFF] text-[#0063C6] text-sm font-medium mb-[-40px]">
                    Most popular plan
                  </div>
                )}
                <div className="md:h-[220px] w-full  pb-6 pt-16 mb-6">
                  <p className="text-[#667085] text-lg font-medium">
                    {plan.name}
                  </p>
                  {plan.name === "Micro" ? (
                    <p className="mt-4 text-[#101828] text-5xl font-semibold">
                      Free
                    </p>
                  ) : (
                    <div>
                      <p className="mt-4 text-[#101828] text-5xl font-semibold">
                        ${rate}
                        <span className="text-[#667085] text-sm font-medium">
                          /user
                        </span>
                      </p>
                      <p className="text-[#101828] font-medium mt-7">
                        ${total} per month
                      </p>
                      <p className="text-[#667085]">
                        {isDiscount ? "Billed annually." : "Month to Month"}
                      </p>
                    </div>
                  )}
                </div>
                {plan.name === "Growth" ? (
                  <a
                    href="https://carehomesupport.netlify.app/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center justify-center cursor-pointer mt-10 w-11/12 py-4 px-5 mx-auto"
                  >
                    Try Professional for Free
                  </a>
                ) : (
                  <a
                    href="https://carehomesupport.netlify.app/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto mt-[44px] flex items-center justify-center py-3 px-5 rounded-3xl border border-[#1f1f1f] w-11/12 text-[#1f1f1f] font-medium"
                  >
                    Try Professional for Free
                  </a>
                )}
              </div>
              <div className="p-6 ">
                <p className="text-[#101828] font-semibold">FEATURES</p>
                {/* <p className="text-[#667085]">Billed annually.</p> */}
                <p className="mt-6 text-[#667085]">
                  With {plan.name}, you get:
                </p>
                <div>
                  {plan?.features.map((feature, index) => (
                    <div className="flex mt-4" key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M16.6663 5L7.49967 14.1667L3.33301 10"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="ms-3 text-[#667085]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
