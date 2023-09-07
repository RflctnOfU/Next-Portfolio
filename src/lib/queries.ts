"use server";
import { client } from "./client";

interface Projects {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  repo: string;
  link: string;
  order: number;
}

export async function projects() {
  const data: Projects[] = await client.fetch(
    `*[_type == 'project']{slug, name, order, description, repo, link, "slug": slug.current, "imageUrl": image.asset->url}`
  );
  return data;
}
