import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex
  items-center
  justify-between
`;

export const Content = tw.div`
  max-w-md
`;

export const Location = tw.span`
  text-sm
  leading-none
  opacity-60
`;

export const Title = tw.h1`
  text-3xl
  tracking-tight
  font-bold
  leading-none
`;

export const TextAbout = tw.p`
  mt-3
  text-base
  leading-relaxed
`;
