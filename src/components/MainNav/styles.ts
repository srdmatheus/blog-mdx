import Link from "next/link";

import tw from "tailwind-styled-components";
export const Nav = tw.nav`
  flex
  items-center
  justify-between
`;

export const List = tw.ul`
  hidden
  md:flex
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

  hover:text-link

  focus:ring-2
  ring-link
`;

export const Content = tw.div`
  z-50
  flex
  hover:text-link
  transition-all
  duration-300
  md:hidden
`;

export const NavMobile = tw.nav`
  backdrop-blur-lg
  mt-16
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-lg
  border
  border-neutral-700
  bg-neutral-800
  shadow-lg
`;

export const ListMobile = tw.ul`
  flex
  flex-col
  w-full
  mx-3
  divide-y
  divide-neutral-600
`;

export const ListItemMobile = tw.li`
  text-center
`;

export const NavLinkMobile = tw(Link)`
  block
  p-3
  text-neutral-50
  hover:text-link
  transition-all
  duration-300
  rounded-lg

  focus:ring-2    
  ring-link
`;
