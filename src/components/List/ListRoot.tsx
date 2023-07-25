import { ComponentProps } from "react";

interface ListProps extends ComponentProps<"ul"> {
  children: React.ReactNode;
}

export const ListRoot = ({ children }: ListProps) => {
  return <ul className="flex gap-2">{children}</ul>;
};
