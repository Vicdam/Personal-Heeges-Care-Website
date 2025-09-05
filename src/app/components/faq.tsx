// components/HeroSection.tsx
"use client";

import router from "next/router";

export default function Faq() {
  const faqs = [
    {
      title: "What is Heeges Care and who is it for?",
      message:
        "Heeges Care is a comprehensive care management platform designed for care home owners, administrators, caregivers, and family members or guardians. It streamlines daily operations, client tracking, and communication for residential care homes and agencies.",
    },
    {
      title: "How does Heeges Care help streamline care management?",
      message:
        "Heeges Care centralizes client information, tasks, schedules, progress notes, incident reporting, and many more in one easy-to-use platform, reducing paperwork and improving efficiency for your team.",
    },
    {
      title: "What if I have multiple homes across the country?",
      message:
        "Heeges Care can support multiple locations. You can manage multiple homes across Canada from a single account, providing centralized oversight while keeping each home’s data separate and secure.",
    },
    {
      title: "Is client data secure and compliant with privacy regulations?",
      message:
        "Yes. Heeges Care uses industry-standard security measures and complies with PIPEDA regulations, ensuring client information is safe and protected at all times.",
    },
    {
      title:
        "What makes Heeges Care different from other care management software?",
      message:
        "Unlike generic or hospital-focused software, Heeges Care was developed by caregivers and administrators who understand residential care. It’s intuitive, practical, and tailored to the real challenges of running residential care homes.",
    },
    {
      title: "What regions does Heeges Care serve?",
      message:
        "Heeges Care currently serves Canada, with plans to expand further to meet the needs of care homes across different locations.",
    },
    {
      title: "Is training or support available for staff using Heeges Care?",
      message:
        "Absolutely. We provide comprehensive onboarding, tutorials, and ongoing support to ensure your team gets the most out of Heeges Care.",
    },
    {
      title: "Can families or guardians access client updates?",
      message:
        "Yes. Families and guardians can receive controlled access to client updates as permitted by your agency, keeping them informed while respecting privacy guidelines",
    },
    {
      title: "Can I change my plan later?",
      message:
        "Yes. You can upgrade or adjust your subscription plan at any time to meet the changing needs of your home or agency.",
    },
    {
      title: "What is your cancellation policy?",
      message:
        "You can cancel your subscription at any time. Please refer to our terms of service for specific details regarding notice periods and refunds.",
    },
    {
      title: "How does billing work?",
      message:
        "Billing is handled securely through Stripe. You will receive regular invoices or automated charges based on your selected plan, with clear records of all transactions.",
    },
    {
      title: "Does Heeges Care have a mobile application?",
      message:
        "Not yet. Heeges Care is currently web-based and fully accessible on mobile browsers. A dedicated mobile app is in development and will be available soon",
    },
  ];
  return (
    <>
      <div className="px-4 py-10 md:py-16  md:px-10 text-start">
        <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-[#101828]">
          FAQs
        </h3>
        <p className="mt-5 text-[#757575] text-xl leading-[30px] md:w-[769px]">
          Can’t find the answer you need? Please chat to our friendly team
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="md:w-[432px]">
              <p className="mt-3 text-xl text-[#141414]">{faq.title}</p>
              <p className="mt-1 text-[#757575]">{faq.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-[#EDFAFF] rounded-2xl mb-20 flex flex-col md:flex-row md:justify-between md:mb-40 mx-4 md:mx-10 p-8">
        <p className=" text-[#141414] text-xl font-medium text-center md:text-start">
          Still have questions?
          <span className=" mt-1 md:mt-0 block text-[#667085] text-center text-base md:text-lg font-normal">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </span>
        </p>
        <button
          className="mt-6 md:mt-0 btn flex items-center justify-center h-11 px-[18px] rounded-3xl font-medium"
          onClick={() => router.push("/demo")}
        >
          Get in Touch
        </button>
      </div>
    </>
  );
}
