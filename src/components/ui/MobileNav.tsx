import { usePathname } from "next/navigation";
import { NavItem } from "../../../types/nav";
import Link from "next/link";
import { useContext } from "react";
import { MobileContext } from "@/state/MobileContext";

interface NavProps {
  items?: NavItem[];
}

export default function MobileNav({ items }: NavProps) {
  const { open, setOpen } = useContext(MobileContext);
  const pathname = usePathname();
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`z-10 flex flex-col gap-4 h-screen items-center bg-gradient-to-br from-backgroundEnd to-backgroundStart bg-opacity-[95] w-full duration-700 fixed bottom-0 ease-in-out py-4  ${
        open
          ? "top-[78px] opacity-100 bg-opacity-100"
          : "-top-[100vh] opacity-0 bg-opacity-0"
      }`}
    >
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full flex justify-center bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text`}
          >
            {item.href && (
              <Link
                href={
                  item.href === "/resume"
                    ? "https://docs.google.com/document/d/1EbP922bEX-H04TKCCedPaPdNCTcqzmc_-TlQkWuk40g/edit?usp=sharing"
                    : item.href
                }
                target={item.href === "/resume" ? "_blank" : undefined}
                onClick={handleOpen}
                className={`flex items-center text-lg text-transparent hover:dark:text-white hover:text-gray-800 hover:scale-105 ${
                  pathname === item.href
                    ? "dark:text-white text-gray-800 text-xl border-b-2 dark:border-white border-gray-800 "
                    : ""
                }`}
              >
                {item.title.toUpperCase()}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
