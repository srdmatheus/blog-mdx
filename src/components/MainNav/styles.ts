import Link from "next/link";

import tw from "tailwind-styled-components";
export const Nav = tw.nav`
  flex
  items-center
  justify-between
`;

export const List = tw.ul`
  flex
  gap-2
`;

export const ListItem = tw.li`
  transition-all
  duration-300
  ease-in-out
`;

export const NavLink = tw(Link)`
  py-1 px-2
  rounded-sm

  transition-all
  duration-300
  ease-in-out

  hover:ring-2
  hover:text-link
  ring-link
  
  focus:ring-2
`;
