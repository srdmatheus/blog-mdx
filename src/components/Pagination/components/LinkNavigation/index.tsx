import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

import { ArrowLeft, ArrowRight } from "@/components/Icons";

type LinkNavigationProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  type: "prev" | "next";
};
export const LinkNavigation = ({
  children,
  type,

  ...props
}: LinkNavigationProps) => {
  return (
    <Link
      className={`group flex min-w-[240px] items-center ${
        type === "next" ? "justify-end" : "justify-start"
      } gap-2 rounded-md p-2 ring-link hover:text-link focus:ring-2`}
      {...props}
    >
      {type === "prev" && (
        <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1" />
      )}
      {children}
      {type === "next" && (
        <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
};
