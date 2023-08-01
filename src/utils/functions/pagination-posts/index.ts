import { BlogPost } from "@/types";

export const paginationPosts = (posts: BlogPost[], limit = 10, page = 1) => {
  return { posts, limit, page };
};
