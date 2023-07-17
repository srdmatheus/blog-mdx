import Image from "next/image";
import Link from "next/link";

export const PostCard = () => {
  return (
    <Link href="#">
      <div className="relative h-80 w-full">
        <Image
          src="/assets/images/image.png"
          fill
          alt="title"
          priority
          className="rounded-xl object-cover object-center"
        />
      </div>

      <div className="pt-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {["TypeScript", "Next.js"].map((tag) => (
            <span key={tag} className="text-sm font-medium text-indigo-500">
              {tag}
            </span>
          ))}
        </div>

        <time className="text-zinc-600">
          15 de maio de 2023 • 3 minutos de leitura
        </time>

        <h2 className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-zinc-700">
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
