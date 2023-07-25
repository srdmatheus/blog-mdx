import Image from "next/image";

import { BlogPost } from "@/types";

import { Mdx } from "@/components/Mdx";

import { formatDate } from "@/utils/functions";


type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const { title, image, readingTime, date, body } = post;
  const formattedDate = formatDate(date, "long");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative max-h-80 w-full sm:h-[30rem]">
        <Image
          src={image}
          fill
          alt={title}
          priority
          className="rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col pt-10">
        <h1 className="text-4xl font-black tracking-tight">{title}</h1>
        <span className="block text-sm opacity-60">
          {formattedDate} · {readingTime} min. de leitura.
        </span>
      </div>

      <div className="my-10 w-full border-t border-neutral-300" />

      <div className="text-lg font-medium leading-loose text-gray-700/90">
        <Mdx code={body.code} />
      </div>
    </div>
  );
};
