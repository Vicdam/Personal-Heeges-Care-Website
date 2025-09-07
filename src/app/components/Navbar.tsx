// components/Navbar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useNavbar } from "./navbarContext";
export default function Navbar() {
  const currentPath = usePathname();
  const { showTableNavbar } = useNavbar();
  const isActive = currentPath.startsWith("/features");
  const [showFeatures, setShowFeatures] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);
  const featureRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement>(null);
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
    // { label: "Blog", path: "/blog" },
  ];
  const featureItems = [
    {
      title: "Client Profile Management",
      subtitle: "Centralized client records for secure, organized access",
      path: "/features/client-profile",
      icon: "/icon4.svg",
    },
    {
      title: "Care Management & Delivery",
      subtitle:
        "Comprehensive tools to support safe and consistent person-centred care",
      icon: "/icon3.svg",
      path: "/features/care-management",
    },
    {
      title: "Client Scheduling & Calendars",
      subtitle: "Simple tools to manage client appointments and activities",
      icon: "/icon1.svg",
      path: "/features/client-scheduling",
    },
    {
      title: "Task & Workflow Management",
      subtitle: "Assign tasks and streamline daily care routines",
      icon: "/icon2.svg",
      path: "/features/task&workflow-management",
    },
    {
      title: "Operations & Administration",
      subtitle: "Manage staff, roles, and operations with ease",
      icon: "/icon3.svg",
      path: "/features/operations&administration",
    },
    {
      title: "Connect & Communicate",
      subtitle: "Secure communication to keep caregivers and families informed",
      icon: "/icon1.svg",
      path: "/features/connect&communicate",
    },
    {
      title: "Compliance & Customization",
      subtitle: "Stay compliant with flexible, customizable features",
      icon: "/icon2.svg",
      path: "/features/compliance&customization",
    },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickOutside = (event: MouseEvent) => {
    if (
      featureRef.current &&
      !featureRef.current.contains(event.target as Node)
    ) {
      setShowFeatures(false);
    }
  };
  const onClickOutsides = (event: MouseEvent) => {
    if (
      featureRefs.current &&
      !featureRefs.current.contains(event.target as Node)
    ) {
      setShowFeatures(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", onClickOutside);
      document.addEventListener("mouseover", onClickOutsides);
    }
    return () => {
      if (typeof window !== "undefined")
        document.removeEventListener("mouseover", onClickOutside);
      document.removeEventListener("mouseover", onClickOutsides);
    };
  }, []);

  return (
    <nav
      ref={featureRefs}
      className={`relative w-full pt-12 px-4 md:px-10 md:py-4  flex  items-center justify-between  z-50 md:fixed transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#FAFAFA] bg-white/50 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      {showTableNavbar ? (
        <div className="bg-white w-full h-[100px] mx-[-40px] hidden md:block">
          <div className="flex items-center justify-between font-bold">
            <div className="w-2/6"></div>
            <div className="pt-6 ms-5">
              <p className="text-[#141414] text-xl font-bold"> Micro </p>
              <p className="block text-[#757575] text-base">Free</p>
            </div>
            <div className="pt-6">
              <p className="text-[#141414] text-xl text-center">Standard </p>
              <p className="block text-[#757575] text-base">
                {" "}
                $7 / User / Month
              </p>
            </div>
            <div>
              <p className="rounded-[16px] bg-[#EDFAFF] mix-blend-multiply py-1 px-3 text-center text-sm w-[130px] font-medium block">
                Most Popular
              </p>
              <p className="text-[#141414] text-xl text-center">Growth</p>
              <p className="block text-[#757575] text-base">
                {" "}
                $12 / User / Month
              </p>
            </div>
            <div className="pt-6">
              <p className="text-[#141414] text-xl text-center">
                {" "}
                Professional
              </p>
              <p className="block text-[#757575] text-base">
                {" "}
                $18 / User / Month
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Left: Logo */}
          <Link href="/home" className="flex items-center gap-4 z-10 w-1/6">
            <Image src="/logo.svg" height="40" width="93" alt="logo" />
          </Link>
          {/* Toggle button for mobile */}
          <button className="md:hidden" onClick={toggleMobile}>
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          {mobileOpen && (
            <div
              className={`block absolute top-full left-0 w-full bg-white transition-all duration-200 shadow-md `}
            >
              <ul className="flex flex-col md:flex-row gap-8 py-4 md:py-0 md:gap-8 px-4 text-[#1B1B1B] text-lg font-medium">
                <li
                  onClick={() => {
                    setMobileOpen(false);
                  }}
                >
                  <Link
                    href="/home"
                    className={`mt-10 hover:text-[#0063C6] transition-colors duration-200 ${
                      currentPath === "/home"
                        ? "text-[#0063C6] font-semibold"
                        : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>

                <li className="relative group">
                  <Link
                    href="/features"
                    className={`flex items-center gap-1 hover:text-[#0063C6] transition-colors duration-200 ${
                      isActive && "text-[#0063C6] font-semibold"
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) toggleSubmenu();
                    }}
                  >
                    Features
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        submenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Submenu */}
                  <div
                    onClick={() => {
                      setMobileOpen(false);
                      setSubmenuOpen(false);
                    }}
                    className={` bg-white transition-all duration-200
      ${submenuOpen ? "block" : "hidden"} `}
                  >
                    <ul className="flex flex-col text-sm p-2">
                      {featureItems.map(({ title, path }, idx) => (
                        <li key={idx}>
                          <Link
                            href={path}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                {/* Remaining menu */}
                {navItems.map((item) => {
                  const isActive = currentPath.startsWith(item.path);
                  return (
                    <li
                      key={item.path}
                      onClick={() => {
                        setMobileOpen(false);
                      }}
                    >
                      <Link
                        href={item.path}
                        className={`hover:text-[#0063C6] transition-colors duration-200 ${
                          isActive && "text-[#0063C6] font-semibold"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <a
                href="https://carehomesupport.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between px-4 mt-10 mb-10"
              >
                <p className="text-[#1B1B1B font-medium text-lg"> Log in</p>
                <ArrowRight />
              </a>
            </div>
          )}
          {/* Center: Menu */}
          {!mobileOpen && (
            <>
              <div className="hidden md:flex gap-8 text-[#1F1F1F] text-small ">
                {/* Home */}
                <Link
                  href="/home"
                  className={`hover:text-[#0063C6] transition-colors duration-200 ${
                    currentPath === "/home"
                      ? "text-[#0063C6] font-semibold"
                      : ""
                  }`}
                >
                  Home
                </Link>

                {/* Features + Dropdown */}
                <div
                  ref={featureRef}
                  className=" group"
                  onMouseOver={() => setShowFeatures(true)}
                  onClick={() => setShowFeatures(false)}
                >
                  <Link
                    href="/features"
                    className={`flex items-center gap-1 hover:text-[#0063C6] transition-colors duration-200 ${
                      isActive && "text-[#0063C6] font-semibold"
                    }`}
                  >
                    <span>Features</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        showFeatures ? "rotate-180 text-[[#0063C6]]" : ""
                      }`}
                    />
                  </Link>

                  {showFeatures && (
                    <div className="absolute top-full left-0 w-screen bg-white shadow-sm py-8 px-12 border-t border-gray-200 z-70">
                      <div
                        className="grid grid-cols-2 gap-8"
                        onClick={() => setShowFeatures(false)}
                      >
                        {featureItems.map(
                          ({ title, subtitle, path, icon: Icon }, idx) => (
                            <Link
                              href={path}
                              key={idx}
                              className="flex gap-4 items-start hover:bg-[#EDFAFF]"
                            >
                              <Image
                                src={Icon}
                                alt="icon"
                                width="40"
                                height="40"
                                className="object-cover"
                              />
                              <div>
                                <p className="font-medium text-[#101828]">
                                  {title}
                                </p>
                                <p className="text-sm text-[#667085]">
                                  {subtitle}
                                </p>
                              </div>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Remaining menu */}
                {navItems.map((item) => {
                  const isActive = currentPath.startsWith(item.path);
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`hover:text-[#0063C6] transition-colors duration-200 ${
                        isActive && "text-[#0063C6] font-semibold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <div className=" btn-border">
                  <a
                    href="https://carehomesupport.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" rounded-3xl bg-white py-[10px] px-[18px]"
                  >
                    Login
                  </a>
                </div>

                <Link
                  href="https://carehomesupport.netlify.app/signup"
                  className="btn py-[10px] px-[18px] hover:bg-blue-700"
                >
                  Try for Free
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </nav>
  );
}
