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
    <div className="flex flex-col items-center justify-center h-full border border-white p-4 mr-4 relative">
      <div
        className={`w-1/2 relative h-[50vh] rounded-2xl shadow-md shadow-black`}
      >
        <Image
          src={projects[1].imageUrl}
          height={400}
          width={700}
          alt="image"
          className="rounded-2xl object-cover  -z-10 w-full h-full absolute"
        />
        <p>{projects[1].description}</p>
      </div>
    </div>
  );
}
