import { allPosts } from "contentlayer/generated";

import { formatPosts } from "@/utils/functions";

export const PostService = {
  getAll: () => {
    const formattedPosts = formatPosts(allPosts);

    return {
      posts: formattedPosts
    };
  }
};
