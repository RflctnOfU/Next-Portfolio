"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Slug } from "../../../types/slug";

interface Project {
  project: Slug;
}

function SlugProject({ project }: Project) {
  const [techs, setTechs] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <div className="flex flex-col h-full rounded-3xl mx-4 relative shadow-lg shadow-neutral-900 gap-4 text-neutral-300">
      <Image
        alt={project.name}
        width={400}
        height={400}
        src={project.imageUrl}
        className={`absolute object-cover -z-10 w-full h-full rounded-3xl transition-all duration-700 ease-in-out ${
          techs || about ? "brightness-[.4]" : ""
        }`}
      />
      <div className="h-2/5 px-4 pt-4 flex justify-between items-start gap-4">
        <div className="flex-[3]  h-full rounded-xl"></div>
        <div
          className={`flex-[2] h-full rounded-xl flex justify-center items-center`}
        >
          <div
            className={`${
              techs
                ? "w-full h-full backdrop-blur-md m-0 rounded-xl translate-x-0 translate-y-0 bg-none"
                : "w-28 h-7 backdrop-blur-lg text-foreground mt-2 mr-2 rounded-md translate-x-20 -translate-y-12 bg-neutral-400/40"
            } w-12 text-center cursor-pointer px-1 duration-700 ease-in-out transition-all flex items-center justify-center relative shadow-neutral-900 shadow-lg text-neutral-300`}
            onClick={() => setTechs((prev) => !prev)}
          >
            <span
              className={`${
                techs ? "opacity-0" : "opacity-100"
              } duration-500 ease-in-out transition-all `}
            >
              Tech Used
            </span>

            <ul
              className={`${
                !techs ? "opacity-0" : "opacity-100"
              } absolute transition-all duration-700 ease-in-out`}
            >
              {project.stack.map((tech) => (
                <li
                  key={tech.tech as string}
                  className={`flex items-center transition-all duration-700 ease-in-out ${
                    techs ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={tech.imageUrl}
                    width={20}
                    height={20}
                    alt={tech.tech as string}
                    className="object-fill"
                  />
                  {"     "}
                  {tech.tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 h-3/5 flex gap-4">
        <p className="flex-[3] shadow-lg shadow-neutral-800 dark:bg-neutral-400/75 bg-neutral-400/50 p-4 rounded-xl">
          {project.description}
        </p>
        <div className="flex-[3]"></div>
        <div className="flex-[2] flex flex-col gap-4 ">
          {/* <div className="flex-[3] flex items-center justify-center rounded-xl shadow-lg shadow-neutral-800 bg-neutral-400/50 dark:bg-neutral-400/75">
            <ul>
              {project.stack.map((tech: { imageUrl: string; tech: string }) => (
                <li key={tech.tech as string} className="flex items-center">
                  <Image
                    src={tech.imageUrl}
                    width={20}
                    height={20}
                    alt={tech.tech as string}
                    className="object-fill"
                  />
                  {"     "}
                  {tech.tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[2] flex items-center justify-around gap-4 shadow-lg shadow-neutral-800 dark:bg-neutral-400/75 bg-neutral-400/50 rounded-xl">
            <Link href={project.repo} target="_blank">
              <Github />
            </Link>
            <Link href={project.link} target="_blank">
              <ExternalLink />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SlugProject;
