export interface Slug {
  name: string;
  link: string;
  repo: string;
  imageUrl: string;
  description: string;
  stack: {
    tech: string;
    imageUrl: string;
  }[];
}
