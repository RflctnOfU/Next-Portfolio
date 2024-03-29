import { MobileContext } from "../../state/MobileContext";

import { useContext } from "react";

export default function Burger() {
  const { open, setOpen } = useContext(MobileContext);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className="w-12 h-12 flex justify-center items-center relative hover:cursor-pointer rounded-xl ml-4"
      onClick={handleOpen}
    >
      <div
        className={`${
          !open ? "w-6 -translate-y-[11.5px]" : "w-[33.75px] -rotate-135"
        } absolute h-[2px] bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5]
        
        dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] duration-500 ease-in-out rounded-sm`}
      ></div>
      <div
        className={`absolute h-[2px] w-6 bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5]
        
        dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] duration-500 ease-in-out rounded-sm ${
          !open ? "" : "opacity-0 translate-x-[14.25px]"
        } `}
      ></div>
      <div
        className={`${
          !open ? "w-6 translate-y-[11.5px]" : "w-[33.75px] rotate-135"
        } absolute h-[2px] bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5]
        
        dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] duration-500 ease-in-out rounded-sm`}
      ></div>
    </div>
  );
}
