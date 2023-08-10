import { PostService } from "@/services";

import { Pagination } from "@/components/Pagination";
import { PostsList } from "@/components/PostsList";

import { paginationPages } from "@/utils/functions";

type PageProps = {
  params: {
    page: string;
  };
};

export default function Page({ params }: PageProps) {
  const currentPage = Number(params.page);

  const { posts, numbPages } = PostService.getAll({ currentPage });

  const { prevPage, nextPage } = paginationPages(currentPage);

  if (!posts.length) {
    return <div>nao há posts</div>;
  }

  return (
    <>
      <PostsList posts={posts} />
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          totalPages={numbPages}
        />
      </div>
    </>
  );
}
