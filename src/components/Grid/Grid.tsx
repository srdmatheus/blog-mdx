import { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_3fr))] gap-6">
      {children}
    </div>
  );
};
