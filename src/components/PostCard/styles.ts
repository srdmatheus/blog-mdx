import Link from "next/link";

import tw from "tailwind-styled-components";

export const Container = tw(Link)`
  rounded-lg
  ring-link
  ring-offset-4
  transition-all
  duration-300
  hover:ring-2
  focus:ring-2
`;

export const ImageContainer = tw.div`
  relative
  h-48
  w-full
`;

export const Content = tw.div`
  pt-3
`;

export const TagsContainer = tw.div`
  mb-3
  flex
  flex-wrap
  gap-2
`;

export const Time = tw.time`
  text-sm
  opacity-70
`;

export const Title = tw.h2`
  mt-2
  max-w-md
  text-ellipsis
  text-base
  font-semibold
`;

export const Description = tw.p`
  mt-3
  text-ellipsis
  text-sm
  opacity-70
`;
