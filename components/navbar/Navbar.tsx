"use client";
import { CONTECT_INIF, NAV_LINKS, SOCIAL_INIF } from "@/constants/main_bd";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../commonts/Button";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll হলে background পরিবর্তন
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={` ${scrolled ? "fixed" : "absolute"} top-0 w-full z-50 `}
    >
      <div className={` ${scrolled ? "bg-slate-600" : "bg-transparent"}  `}>
        <div className="container mx-auto flex items-center justify-between text-center text-lg  relative  py-1  ">
          <ul className="hidden h-full gap-12 lg:flex">
            {CONTECT_INIF.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className=" flex items-center text-center gap-1 regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all "
              >
                {link.icon}
                <span> {link.label}</span>
              </Link>
            ))}
          </ul>
          <ul className="hidden h-full gap-12 lg:flex text-xl">
            {SOCIAL_INIF.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all"
              >
                {link.icon}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* menu */}
      <div className={` ${scrolled ? "bg-slate-800" : "bg-transparent"}  `}>
        <nav
          className={` container mx-auto flex  flexBetween   relative z-30 py-5   justify-between  ${
            scrolled ? "border-none" : "border-t"
          }   border-slate-400`}
        >
          <Link href={"/"}>
            <Image src={Logo} alt="travel img " />
          </Link>
          <ul className="hidden h-full gap-12 lg:flex ">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-allhover:text-orange-400 hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="lg:flexCenter hidden">
            <Button type="button" title="Login" variant="btn_dark_green" />
          </div>
        </nav>
      </div>
    </header>
  );
}
