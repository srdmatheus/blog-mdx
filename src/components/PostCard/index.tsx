import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/types";

import { Tag } from "@/components/Tag";

import { formatDate } from "@/utils/functions";

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { slug, image, title, description, tags, date, readingTime } = post;
  const formattedDate = formatDate(date);

  return (
    <Link
      href={`/artigos/${slug}`}
      className="rounded-lg ring-link ring-offset-4 transition-all duration-300 hover:ring-2 focus:ring-2"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          fill
          alt="title"
          priority
          className="rounded-lg object-cover object-center"
        />
      </div>

      <div className="pt-3">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>

        <time className="text-sm opacity-70">
          {formattedDate} · {readingTime} min. de leitura
        </time>

        <h2 className="mt-2 max-w-md text-ellipsis text-base font-semibold">
          {title}
        </h2>

        <p className="mt-3 text-ellipsis text-sm opacity-70">{description}</p>
      </div>
    </Link>
  );
};
