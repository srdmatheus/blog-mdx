import { Mdx } from "@/components/Mdx";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hello World!</h2>

      <div dangerouslySetInnerHTML={{ __html: posts[0]?.title }} />
      <Image src={posts[0].image} width={700} height={700} alt="" />
      <Mdx code={posts[0].body.code} />
    </main>
  );
}
