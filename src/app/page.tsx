import { PostService } from "@/services";
import { PaginationData } from "@/types";

import { Grid } from "@/components/Grid";
import { Pagination } from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import { Profile } from "@/components/Profile";

export default function Home() {
  const { posts } = PostService.getAll();

  const paginationData: PaginationData = {
    data: {
      currentPage: 1,
      nextPage: "/45a",
      prevPage: "/asdad",
      totalPages: 5
    }
  };

  return (
    <main>
      <div className="py-12">
        <Profile />
      </div>

      <Grid>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
      <div className="mt-6">
        <Pagination data={paginationData.data} />
      </div>
    </main>
  );
}
