import Image from "next/image";
import { client } from "@/lib/client";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
} from "react";
async function Project({ params }: { params: { slug: string } }) {
  const project = await client.fetch(
    `*[slug.current == '${params.slug}']{description, repo, link, name, "imageUrl": image.asset->url, stack[]{tech, 'imageUrl': image.asset->url}}[0]`
  );
  console.log(project);

  return (
    <div className="flex flex-col items-center justify-end h-full rounded-3xl mx-4 relative shadow-lg shadow-neutral-900">
      <Image
        alt={project.name}
        width={400}
        height={400}
        src={project.imageUrl}
        className={`absolute object-cover -z-10 w-full h-full rounded-3xl `}
      />
      <div className="p-4 h-3/5 flex gap-4">
        <p className="flex-[3] shadow-lg shadow-neutral-800 dark:bg-neutral-400/75 bg-neutral-400/50 p-4 rounded-xl">
          {project.description}
        </p>
        <div className="flex-[3]"></div>
        <div className="flex-[2] flex flex-col gap-4 ">
          <div className="flex-[3] flex items-center justify-center rounded-xl shadow-lg shadow-neutral-800 bg-neutral-400/50 dark:bg-neutral-400/75">
            <ul>
              {project.stack.map(
                (tech: {
                  imageUrl: string | StaticImport;
                  tech:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                }) => (
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
                )
              )}
            </ul>
          </div>
          <div className="flex-[2] flex items-center justify-around gap-4 shadow-lg shadow-neutral-800 dark:bg-neutral-400/75 bg-neutral-400/50 rounded-xl">
            <Link href={project.repo} target="_blank">
              <Github />
            </Link>
            <Link href={project.link} target="_blank">
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
