import { Post } from "contentlayer/generated";

import { slugify } from "@/utils/functions";

export const formatPosts = (allPosts: Post[]) => {
  const formattedPosts = allPosts.map((post) => {
    return {
      _id: post._id,
      slug: slugify(post.slug),
      title: post.title,
      description: post.description,
      date: post.date,
      readingTime: Math.ceil(post.readingTime.minutes),
      tags: post.tags,
      body: {
        code: post.body.code,
        raw: post.body.raw
      },
      image: post.image
    };
  });

  return formattedPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
};
