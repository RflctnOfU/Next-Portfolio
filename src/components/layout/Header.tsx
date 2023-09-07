"use client";
import { useState } from "react";
import { MobileContext } from "../../state/MobileContext";
import kmlogo from "../../../public/images/kmlogo.svg";
import kmlogoDark from "../../../public/images/kmlogoDark.svg";
import Nav from "../ui/Nav";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useTheme } from "next-themes";
import MobileNav from "../ui/MobileNav";

export default function Header() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const items = siteConfig.navItems;
  return (
    <MobileContext.Provider value={{ open, setOpen }}>
      <div className="w-full m-2 h-16 flex justify-between items-center pr-4 z-20">
        <div className="w-auto flex items-center">
          <Image
            src={theme === "dark" ? kmlogoDark : kmlogo}
            alt="logo"
            width={100}
          />
          <div className="bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent text-xl sm:text-3xl">
            Kristofer Marshall
          </div>
        </div>
        <Nav items={siteConfig.navItems} />
      </div>
      <MobileNav items={siteConfig.navItems} />
    </MobileContext.Provider>
  );
}
