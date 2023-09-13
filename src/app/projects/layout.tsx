import Image from "next/image";
import { useState } from "react";
import { client } from "@/lib/client";
import { projects } from "@/lib/queries";
import Link from "next/link";
import { useParams } from "next/navigation";
import Projects from "@/components/ui/Projects";
import { ProjectItems } from "../../../types/projects";
import MobileProjects from "@/components/ui/MobileProjects";

// interface ProjectsInt {
//   slug: string;
//   title: string;
//   imageUrl: string;
//   description: string;
//   repo: string;
//   link: string;
//   order: number;
// }

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [active, setActive] = useState(false);
  const projects: ProjectItems[] = await client.fetch(
    `*[_type == 'project']{name, order, description, repo, link, "slug": slug.current, "imageUrl": image.asset->url} | order(order asc)`
  );

  // const handleClick = () => {
  //   setActive((prev) => !prev);
  // };

  return (
    <div className="flex md:flex-row flex-col w-full p-4 items-center justify-center h-full ">
      {/* <div className="flex-[2] flex flex-col items-center justify-center p-4 gap-4 h-full">
        <ProjectCard
          id={1}
          name={""}
          description={""}
          image={""}
          active={1}
          details={"suppordev"}
        />
        <div
          className={`${
            active ? " w-36" : "w-12"
          } h-24 duration-500 ease-in-out transition-all border border-green-700 relative`}
          onClick={handleClick}
        >
          <div
            className={`${
              active
                ? "rotate-0 h-6 w-12 right-2 bottom-8"
                : "-rotate-90 h-4 w-8  text-xs right-0 bottom-4"
            } duration-500 transition-all ease-in-out border border-red-700 absolute`}
          >
            hello
          </div>
        </div>
      </div> */}
      <MobileProjects items={projects} />
      <Projects items={projects} />
      <div className="md:flex-[8] h-full w-full">{children}</div>
    </div>
  );
}

// interface Card {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   active: number;
//   details: string;
// }

// const ProjectCard = ({
//   id,
//   name,
//   description,
//   image,
//   active,
//   details,
// }: Card) => {
//   return (
//     <div
//       className={`${
//         active === id ? "w-full h-1/3" : "w-1/2 h-1/6"
//       }  duration-500 ease-in-out transition-all border border-foreground rounded-xl relative`}
//       // onClick={() => handleClick(id)}
//     >
//       <Image
//         src={"/images/SupporDev.png"}
//         alt={name}
//         fill
//         className={`${
//           active === id ? "opacity-80" : "opacity-25 blur-[2px]"
//         } absolute object-cover w-full h-full rounded-xl duration-300 ease-in-out transition-all -z-10`}
//       />
//       <div
//         className={`${
//           active === id
//             ? "rotate-0 h-auto w-auto right-2 bottom-16 backdrop-blur-md to-[#254486] via-[#2c2c95] from-[#4b199b]"
//             : "-rotate-90 h-auto w-auto  text-xs -right-2 bottom-8 to-[#578af9] via-[#7777f5] from-[#9b62f6]"
//         } duration-500 transition-all ease-in-out  absolute rounded-sm px-1 bg-gradient-to-r to-[#254486] via-[#2c2c95] from-[#4b199b] bg-clip-text text-transparent font-extrabold`}
//       >
//         SupporDev
//       </div>
//       <Link
//         href={`/projects/${details}`}
//         className={`${
//           active === id ? "opacity-100 rotate-0" : "opacity-0 rotate-60"
//         } text-foreground duration-500 transition-all ease-in-out absolute bottom-2 right-2 backdrop-blur-[9px] rounded-md px-1`}
//       >
//         Details
//       </Link>
//       <p
//         className={`${
//           active === id
//             ? "opacity-100 backdrop-blur-md line-clamp-3"
//             : "opacity-0 backdrop-blur-0"
//         } transition-all duration-500 absolute w-1/2 bottom-2 left-2 text-xs`}
//       >
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias maiores
//         libero unde at soluta natus vitae et id aut voluptas, iste voluptate est
//         optio necessitatibus aliquid expedita mollitia aliquam, officia
//         excepturi saepe aperiam nostrum quam voluptatum accusantium. Nihil iure
//         nemo voluptates commodi corrupti eum impedit consequuntur! Quibusdam
//         ducimus est sit!...
//       </p>
//     </div>
//   );
// };
