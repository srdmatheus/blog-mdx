import { allPosts } from "contentlayer/generated";

import { Grid } from "@/components/Grid";
import { PostCard } from "@/components/PostCard";
import { Profile } from "@/components/Profile";

export default function Home() {
  const posts = allPosts;

  return (
    <main>
      <div className="py-12">
        <Profile />
      </div>
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
