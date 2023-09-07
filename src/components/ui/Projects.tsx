"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItems } from "../../../types/projects";
import { Card } from "../../../types/card";

function ProjectCard({ id, name, image, active, details, handleClick }: Card) {
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
            active === id
              ? "rotate-0 h-auto w-auto right-2 bottom-16 opacity-100"
              : " text-xs  opacity-0"
          } duration-700 transition-all ease-in-out rounded-md px-1 text-center text-white bg-slate-600/70 z-[5]`}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

interface Projects {
  items: ProjectItems[];
}

export default function Projects({ items }: Projects) {
  const [active, setActive] = useState(0);
  console.log(items);

  return (
    <div className="flex-[2] flex flex-col items-center justify-center p-4 gap-4 h-full">
      {items.length &&
        items.map((item) => (
          <ProjectCard
            key={item.order}
            id={item.order}
            name={item.name}
            description={item.description}
            image={item.imageUrl}
            active={active}
            details={item.slug}
            handleClick={setActive}
          />
        ))}
    </div>
  );
}
