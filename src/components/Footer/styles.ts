import tw from "tailwind-styled-components";

export const Container = tw.footer`
  flex
  items-center
  justify-between
  border-t
  border-neutral-300
  py-8
`;

export const Copy = tw.span`
  text-sm
  opacity-60
`;

export const ListSociaLinks = tw.ul`
  flex
  gap-3
  leading-none
`;

export const ItemSocialLinks = tw.li`
  rounded-md
  border-link
  text-neutral-500
  ring-link
  focus-within:ring-2
  hover:text-link

  transition-all
  duration-300
`;
