import Image from "next/image";
import Link from "next/link";
import { Card } from "../../../types/card";

export default function ProjectCard({
  id,
  name,
  image,
  active,
  details,
  handleClick,
}: Card) {
  return (
    <div
      className={`${
        active === id ? "w-full h-2/3 shadow-lg" : "w-2/3 h-1/3 shadow-sm"
      }  duration-700 ease-in-out transition-all rounded-xl relative flex flex-col items-center justify-center shadow-neutral-900 `}
      onMouseEnter={() => handleClick(id)}
      onMouseLeave={() => handleClick(0)}
    >
      <Link href={`/projects/${details}`}>
        <Image
          src={image}
          alt={name}
          fill
          className={`${
            active === id ? "opacity-80" : "opacity-30 blur-[0.5px]"
          } absolute object-cover w-full h-full rounded-xl duration-700 ease-in-out transition-all z-0`}
        />
        <div
          className={`${
            active === id ? "opacity-100 text-lg" : " text-xs  opacity-0"
          } duration-700 transition-all ease-in-out rounded-md text-center text-white bg-slate-600/40 z-[5] backdrop-blur-lg text-xl px-2`}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}
