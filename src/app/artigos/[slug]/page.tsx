import { PostService } from "@/services";

import { Post } from "@/components/Post";
import { BackButton } from "@/components/Post/components/BackButton";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug);

  if (!post) return null;

  return (
    <>
      <div className="mb-3 flex justify-start">
        <BackButton />
      </div>
      <Post post={post} />
    </>
  );
}
