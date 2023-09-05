"use client";
import { useState } from "react";
import kmlogo from "../../../public/images/kmlogo.svg";
import kmlogoDark from "../../../public/images/kmlogoDark.svg";
import Nav from "../ui/Nav";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Header() {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const handleActive = () => {
    setActive((prev) => !prev);
  };
  const items = siteConfig.navItems;
  return (
    <>
      <div className="w-full m-4 h-16 flex justify-between items-center pr-4 z-10">
        <div className="w-1/3 flex items-center">
          <Image
            src={theme === "dark" ? kmlogoDark : kmlogo}
            alt="logo"
            width={100}
          />
          <div
            className="bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5]
        
        dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent text-lg sm:text-4xl"
          >
            Kristofer Marshall
          </div>
        </div>
        <Nav items={siteConfig.navItems} active={handleActive} />
      </div>
      <div
        className={`z-[5] flex flex-col gap-4 h-screen items-center bg-gradient-to-r from-backgroundEnd to-backgroundStart bg-opacity-[95] w-full duration-700 fixed bottom-0 ease-in-out py-4  ${
          active
            ? "top-[78px] opacity-100 bg-opacity-100"
            : "-top-[100vh] opacity-0 bg-opacity-0"
        }`}
      >
        {items?.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full flex justify-center bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5]
        
            dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent ${
              pathname === item.href
                ? "dark:text-white text-gray-800 text-xl "
                : ""
            }`}
            >
              <Link href={item.href} onClick={handleActive}>
                {item.title.toUpperCase()}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
