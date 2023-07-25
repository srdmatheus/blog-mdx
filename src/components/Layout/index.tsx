import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <div className="mx-auto w-full max-w-4xl px-6">{children}</div>;
};
