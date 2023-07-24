import Image from "next/image";

import { BlogPost } from "@/types";

import { Tag } from "@/components/Tag";

import { formatDate } from "@/utils/functions";

import * as S from "./styles";

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { slug, image, title, description, tags, date, readingTime } = post;
  const formattedDate = formatDate(date);

  return (
    <S.Container href={`/post/${slug}`}>
      <S.ImageContainer>
        <Image
          src={image}
          fill
          alt="title"
          priority
          className="rounded-lg object-cover object-center"
        />
      </S.ImageContainer>

      <S.Content>
        <S.TagsContainer>
          {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </S.TagsContainer>

        <S.Time>
          {formattedDate} · {readingTime} min. de leitura
        </S.Time>

        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};
