import tw from "tailwind-styled-components";

export const Container = tw.header`
  fixed
  z-40
  flex
  h-16
  w-full
  items-center
  border-b
  border-neutral-200
  bg-neutral-100
  shadow-sm
  backdrop-blur-sm
  transition-all
  duration-300
  ease-out
`;

export const Content = tw.div`
  flex
  mx-auto
  h-full
  w-full
  max-w-4xl
  items-center
  justify-between
  px-4
`;
