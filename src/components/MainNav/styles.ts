import tw from "tailwind-styled-components";

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
  px-2
  hover:bg-primary
  transition-all
  duration-300
  ease-in-out
  
`;
