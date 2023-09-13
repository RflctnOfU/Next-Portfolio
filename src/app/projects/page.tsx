import Image from "next/image";
import { client } from "@/lib/client";

interface Projects {
  slug: string;
  title: string;
  imageUrl: any;
  description: string;
  repo: string;
  link: string;
  order: number;
  image: any;
}

export default async function Projects() {
  const projects: Projects[] = await client.fetch(
    `*[_type == 'project']{_id, name, order, description, repo, "slug": slug.current, link, "imageUrl": image.asset->url} | order(order asc)`
  );
  // console.log(projects[0]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 mr-4 relative">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-3xl sm:text-4xl animate-bounce">
          <span className="sm:hidden bg-gradient-to-t from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent">
            &uarr;
          </span>
        </div>
        <div className="text-3xl sm:text-4xl text-center flex gap-2">
          <div className="bounce-side">
            <span className="hidden sm:inline bg-gradient-to-l from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent">
              &larr;
            </span>{" "}
          </div>
          <p>
            Select a{" "}
            <span className="bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent">
              Project
            </span>{" "}
            for Details
          </p>
        </div>
      </div>
    </div>
  );
}
