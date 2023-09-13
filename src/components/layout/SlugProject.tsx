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
    <>
      {/* <div className="hidden sm:flex flex-col h-full rounded-3xl relative shadow-lg ml-4 shadow-neutral-900 gap-4 text-neutral-300 ">
        <Image
          alt={project.name}
          width={400}
          height={400}
          src={project.imageUrl}
          className={`absolute object-cover -z-10 w-full h-full rounded-3xl transition-all duration-700 ease-in-out ${
            techs || about ? "brightness-[.65]" : ""
          }`}
        />
        <div className="h-2/5 px-4 pt-4 flex gap-4">
          <div className="flex-[3]  h-full rounded-xl"></div>
          <div
            className={`flex-[2] h-full rounded-xl flex justify-center items-center`}
          >
            <div
              className={`${
                techs
                  ? "w-full h-full backdrop-blur-md m-0 rounded-xl translate-x-0 translate-y-0 bg-none"
                  : "w-28 h-7 backdrop-blur-lg text-foreground mt-2 mr-2 rounded-md translate-x-20 -translate-y-12 bg-neutral-600/40"
              } text-center cursor-pointer px-1 duration-700 ease-in-out transition-all flex items-center justify-center relative shadow-neutral-900 shadow-lg text-neutral-50`}
              onClick={() => {
                setTechs((prev) => !prev);
                about && setAbout((prev) => !prev);
              }}
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
        <div className="px-4 pb-4 h-3/5 flex  gap-4 items-end justify-center">
          <div className="flex-[3] h-full flex justify-center items-center">
            <div
              className={`${
                about
                  ? "w-full h-full backdrop-blur-md m-0 rounded-xl translate-x-0 translate-y-0 bg-none"
                  : "w-36 h-7 backdrop-blur-lg mb-2 ml-2 rounded-md  bg-neutral-600/40 -translate-x-44 translate-y-28"
              } text-center cursor-pointer px-1 duration-700 ease-in-out transition-all flex items-center justify-center relative shadow-neutral-900 shadow-lg text-neutral-50`}
              onClick={() => {
                setAbout((prev) => !prev);
                techs && setTechs((prev) => !prev);
              }}
            >
              <span
                className={`${
                  about ? "opacity-0" : "opacity-100"
                } duration-500 ease-in-out transition-all `}
              >
                About Project
              </span>
              <p
                className={`${
                  !about ? "opacity-0 text-[4px]" : "opacity-100 text-lg"
                } absolute transition-all duration-700 ease-in-out w-2/3`}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="flex-[2] h-full flex justify-center items-center">
            <div className="w-2/5 h-2/5 justify-center items-center  rounded-lg shadow-md dark:shadow-backgroundEnd shadow-neutral-900 backdrop-blur-lg flex bg-neutral-600/40">
              <span></span>
              <div className="flex gap-4">
                <div>
                  <Link
                    href={project.repo}
                    className="text-neutral-50 hover:text-neutral-200 duration-300 transition-all ease-in-out"
                  >
                    <Github />
                  </Link>
                </div>
                <div>
                  <Link
                    href={project.link}
                    className="text-neutral-50 hover:text-neutral-200 duration-300 transition-all ease-in-out"
                  >
                    <ExternalLink />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="hidden md:flex flex-col h-full rounded-3xl ml-4  gap-4 text-neutral-300 ">
        <div className="w-full h-1/5 flex flex-col justify-center items-start">
          <h1 className="text-5xl text-transparent bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text">
            {project.name.toUpperCase()}
          </h1>
          <div>
            <ul className="flex gap-4 bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text items-center backdrop-blur-sm">
              {project.stack.map((tech) => (
                <li
                  key={tech.tech as string}
                  className={`flex items-center transition-all duration-700 ease-in-out text-transparent`}
                >
                  <Image
                    src={tech.imageUrl}
                    width={20}
                    height={20}
                    alt={tech.tech as string}
                    className="object-fill"
                  />
                  <span>&nbsp;</span>
                  {tech.tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-4/5 flex gap-4">
          <div className="w-3/4 h-full  relative shadow-lg shadow-foreground dark:shadow-backgroundEnd rounded-xl">
            <Image
              alt={project.name}
              width={400}
              height={400}
              src={project.imageUrl}
              className={`absolute object-cover w-full h-full rounded-xl`}
            />
          </div>
          <div className="w-1/4 flex flex-col gap-2 ">
            <div className="w-full h-4/5 flex justify-center items-center">
              <p className="text-foreground w-5/6 text-lg">
                {project.description}
              </p>
            </div>
            <div className="w-full h-1/5 flex justify-around items-center">
              <Link
                href={project.repo}
                target="_blank"
                className="text-foreground hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#2f55a8] dark:hover:text-[#4c76d0]"
              >
                <Github />
              </Link>
              <Link
                href={project.link}
                target="_blank"
                className="text-foreground hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#6a3bb5] dark:hover:text-[#9866ea]"
              >
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden w-full h-full rounded-xl shadow-md shadow-neutral-900 bg-gradient-to-t from-backgroundStart to-backgroundEnd">
        <div className="flex-[3] rounded-t-xl relative w-full">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="absolute rounded-t-xl object-cover"
          />
        </div>
        <div className="flex-[2] flex flex-col gap-2 justify-between p-4 items-center w-full">
          <h1 className="text-2xl bg-gradient-to-t from-backgroundStart to-backgroundEnd p-2 rounded-md backdrop-blur-sm shadow shadow-neutral-900 w-full text-center">
            {project.name}
          </h1>
          <div className="flex items-center justify-center">
            {/* <p className="text-[12px] line-clamp-3">{project.description}</p> */}
            <div>
              <ul className="flex flex-wrap justify-center gap-x-4">
                {project.stack.map((tech) => (
                  <li key={tech.imageUrl as string} className="flex">
                    <Image
                      src={tech.imageUrl}
                      width={30}
                      height={20}
                      alt={tech.tech as string}
                      className="object-fill"
                    />
                    <span>&nbsp;</span>
                    {tech.tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-around items-center w-2/3">
            <Link href={project.repo} target="_blank">
              <Github
                className="hover:scale-105 hover:text-white transition-all duration-300 ease-in-out"
                size={25}
              />
            </Link>
            <Link href={project.link} target="_blank">
              <ExternalLink
                className="hover:scale-105 hover:text-white transition-all duration-300 ease-in-out"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlugProject;
