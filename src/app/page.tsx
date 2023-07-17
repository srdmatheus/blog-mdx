import { allPosts } from "contentlayer/generated";

import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = allPosts;

  return (
    <main className="">
      <h2>Hello World!</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquid
        asperiores a eum, eos excepturi cumque neque iusto officiis fuga
        possimus molestias dolorem est quis ut mollitia nihil commodi quidem?
        Ullam dolore itaque deleniti assumenda incidunt temporibus in aliquam
        minima veniam! Dolorem animi error consequuntur ad laboriosam officia
        deserunt odio! Impedit eius quidem tempora cupiditate maiores provident
        facilis soluta recusandae! Tempore, iusto vitae reiciendis doloremque
        ullam soluta sequi, aliquid nihil doloribus obcaecati facere natus id
        assumenda expedita? Corporis, quis, obcaecati optio soluta est qui
        culpa, cum atque omnis sequi molestiae. Blanditiis voluptatum iure velit
        cumque magni deserunt, cum enim ipsam doloribus ullam debitis nobis
        error libero, tempora nihil optio! Suscipit consequuntur esse omnis
        blanditiis eos veniam obcaecati vel libero minima.
      </div>

      <div>
        {posts.map((post) => (
          <PostCard key={post._id} />
        ))}
      </div>
    </main>
  );
}
