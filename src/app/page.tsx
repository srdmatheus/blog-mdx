import { PostService } from "@/services";

import { Pagination } from "@/components/Pagination";
import { PostsList } from "@/components/PostsList";
import { Profile } from "@/components/Profile";

export default function Home() {
  const { posts, currentPage, numbPages } = PostService.getAll();

  return (
    <main>
      <div className="py-12">
        <Profile />
      </div>

      <PostsList posts={posts} />
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          nextPage="/page/2"
          totalPages={numbPages}
          prevPage="/"
        />
      </div>
    </main>
  );
}
