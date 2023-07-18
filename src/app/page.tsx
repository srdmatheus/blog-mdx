import { allPosts } from "contentlayer/generated";

import { Grid } from "@/components/Grid";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = allPosts;

  return (
    <main className="">
      <h2>Hello World!</h2>

      <div>
        <Grid>
          {posts.map((post) => (
            <PostCard key={post._id} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
