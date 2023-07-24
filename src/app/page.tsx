import { PostService } from "@/services";

import { Grid } from "@/components/Grid";
import { PostCard } from "@/components/PostCard";
import { Profile } from "@/components/Profile";

export default function Home() {
  const { posts } = PostService.getAll();

  return (
    <main>
      <div className="py-12">
        <Profile />
      </div>

      <Grid>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </Grid>
    </main>
  );
}
