import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "7w3ajya1",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
