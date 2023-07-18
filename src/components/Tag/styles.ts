import tw from "tailwind-styled-components";

import { TagProps } from "./Tag";

export const Tag = tw.span<Pick<TagProps, "size">>`
  rounded-md
  bg-link/10
  text-link
  font-semibold
  px-3
  py-1

  hover:ring-1
  focus:ring-1
  ring-inset
  ring-link

  transition-all
  duration-300


  ${({ size }) => `
  text-${size}
  `}
`;
