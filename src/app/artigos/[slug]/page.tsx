import { PostService } from "@/services";

import { Mdx } from "@/components/Mdx";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const post = PostService.getBySlug(params.slug);

  return post?.body.code && <Mdx code={post?.body.code} />;
}
