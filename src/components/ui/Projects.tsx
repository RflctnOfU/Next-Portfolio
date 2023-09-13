"use client";
import { useState } from "react";
import { ProjectItems } from "../../../types/projects";
import ProjectCard from "./ProjectCard";

interface Projects {
  items: ProjectItems[];
}

export default function Projects({ items }: Projects) {
  const [active, setActive] = useState(0);
  console.log(items);

  return (
    <div className="md:flex-[2] hidden md:flex flex-col items-center justify-center gap-4 h-full">
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
