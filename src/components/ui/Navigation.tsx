"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Navigation() {
  const router = useRouter();
  return (
    <div className="w-full bg-transparent p-4 flex justify-start items-center px-8 absolute z-[5] top-[84px]">
      <div>
        <ChevronLeft
          className="text-foreground hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer hover:text-[#2f55a8] dark:hover:text-[#4c76d0] hover:-translate-x-1 bg-neutral-600/30 dark:bg-neutral-400/30 rounded-lg"
          size={30}
          onClick={() => router.back()}
        />
      </div>
      {/* <div>
        <ChevronRight
          className="text-foreground hover:scale-110 duration-300 transition-all  ease-in-out cursor-pointer hover:text-[#6a3bb5] dark:hover:text-[#9866ea] hover:translate-x-1 bg-neutral-600/50 dark:bg-neutral-400/50 rounded-lg"
          size={30}
          onClick={() => router.forward()}
        />
      </div> */}
    </div>
  );
}

export default Navigation;
