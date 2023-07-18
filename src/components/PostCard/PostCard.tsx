import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/Tag";

export const PostCard = () => {
  return (
    <Link
      href="#"
      className="rounded-lg ring-link ring-offset-4 transition-all duration-300 hover:ring-2 focus:ring-2"
    >
      <div className="relative h-48 w-full">
        <Image
          src="/assets/images/image.png"
          fill
          alt="title"
          priority
          className="rounded-lg object-cover object-center"
        />
      </div>

      <div className="pt-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {["TypeScript", "Next.js"].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <time className="text-sm text-zinc-600">
          15 de maio de 2023 • 3 minutos de leitura
        </time>

        <h2 className="mt-2 max-w-md text-ellipsis text-xl font-medium text-zinc-700">
          O que é Dependency Injection e como aplicar no ReactJs
        </h2>

        <p className="mt-3 text-zinc-600">
          Vamos aprender à como aplicar esse conceito tão importante no
          React.js!
        </p>
      </div>
    </Link>
  );
};
