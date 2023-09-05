import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import sanity from "../../../public/images/Sanity.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full p-2 flex justify-around items-center sticky bottom-0 ">
      <div className="flex gap-8">
        <Link href={"https://www.github.com/RflctnOfU"} target="_blank">
          <Github className="hover:scale-105 hover:text-[#4c76d0] dark:hover:text-[#4c76d0] duration-300 transition-all ease-in-out dark:text-gray-300 text-gray-600" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/kristofer-marshall-7a211441/"}
          target="_blank"
        >
          <Linkedin className="hover:scale-105 duration-300 transition-all ease-in-out text-foreground hover:text-[#9866ea] dark:hover:text-[#9866ea]" />
        </Link>
      </div>
      <div className="flex items-center bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent text-xl sm:text-md">
        Powered by{" "}
        <Link href="https://sanity.io" target="_blank">
          <Image src={sanity} alt="sanity logo" width={80} />
        </Link>
      </div>
    </div>
  );
}
