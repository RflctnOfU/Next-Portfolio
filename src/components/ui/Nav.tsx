import { usePathname } from "next/navigation";

import ThemeToggle from "./ThemeToggle";
import { NavItem } from "../../../types/nav";
import Link from "next/link";
import Burger from "./Burger";

interface NavProps {
  items?: NavItem[];
}

export default function Nav({ items }: NavProps) {
  const pathname = usePathname();

  return (
    <div className="w-auto flex justify-between items-center h-16">
      {items?.length && (
        <nav className="hidden gap-6 md:flex mr-4 bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  target={item.href === "/resume" ? "_blank" : undefined}
                  href={
                    item.href === "/resume"
                      ? "https://docs.google.com/document/d/1EbP922bEX-H04TKCCedPaPdNCTcqzmc_-TlQkWuk40g/edit?usp=sharing"
                      : item.href
                  }
                  className={`flex items-center text-lg text-transparent hover:dark:text-white hover:text-gray-800 hover:scale-105 ${
                    pathname === item.href
                      ? "dark:text-white text-gray-800 text-xl border-b-2 dark:border-white border-gray-800"
                      : ""
                  }`}
                >
                  {item.title.toUpperCase()}
                </Link>
              )
          )}
        </nav>
      )}
      <ThemeToggle />
      <div className="flex justify-center items-center md:hidden ">
        <Burger />
      </div>
    </div>
  );
}
