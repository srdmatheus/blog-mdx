import { BlogPost } from "@/types";

import { Grid } from "@/components/Grid";
import { PostCard } from "@/components/PostCard";

type PostsListProps = {
  posts: BlogPost[];
};
export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="w-full">
      <Grid>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </div>
  );
};
