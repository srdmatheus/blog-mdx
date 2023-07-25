import { MDX } from "contentlayer/core";

export type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  body: MDX;
  image: string;
  tags?: string[] | undefined;
};
