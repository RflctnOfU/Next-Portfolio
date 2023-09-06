"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
function Navigation() {
  const router = useRouter();
  return (
    <div className="w-full bg-transparent m-4 flex justify-between items-center px-8">
      <div>
        <ChevronLeft
          className="text-foreground hover:scale-110 duration-300 transition-all ease-in-out cursor-pointer hover:text-[#2f55a8] dark:hover:text-[#4c76d0] hover:-translate-x-1"
          size={30}
          onClick={() => router.back()}
        />
      </div>
      <div>
        <ChevronRight
          className="text-foreground hover:scale-110 duration-300 transition-all  ease-in-out cursor-pointer hover:text-[#6a3bb5] dark:hover:text-[#9866ea] hover:translate-x-1"
          size={30}
          onClick={() => router.forward()}
        />
      </div>
    </div>
  );
}

export default Navigation;
