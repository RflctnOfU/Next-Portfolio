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
      <div className="flex">
        <div>
          <span className="hidden sm:inline">&larr;</span> Select a Project to
          see Details <span className="sm:hidden text-[24px]">&uarr;</span>
        </div>
      </div>
    </div>
  );
}
