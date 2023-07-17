import tw from "tailwind-styled-components";

export const Container = tw.header`
  fixed
  z-40
  flex
  h-16
  w-full
  items-center
  border-b
  border-zinc-300
  bg-zinc-200/50
  shadow-sm
  backdrop-blur-sm
  transition-all
  duration-200
  ease-out
`;

export const Content = tw.div`
  flex
  h-full
  w-full
  items-center
  justify-between
  px-4
`;

export const Nav = tw.nav`
  flex
  items-center
  justify-between
`;

export const List = tw.ul`
  flex
  gap-4
`;

export const ListItem = tw.li`
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`;
