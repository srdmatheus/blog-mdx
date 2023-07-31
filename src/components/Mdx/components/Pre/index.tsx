import { ComponentProps, ReactNode } from "react";

type PreProps = ComponentProps<"pre"> & {
  children: ReactNode;
  "data-language"?: string;
};

export const Pre = ({ children, ...props }: PreProps) => {
  const lang = `.${props["data-language"]}` ?? "shell";

  return (
    <div className="mt-4 overflow-x-auto rounded-lg">
      <header className="flex w-full justify-start rounded-t-lg bg-neutral-700 px-3 py-2">
        <span className="text-sm font-normal text-neutral-50">{lang}</span>
      </header>
      <pre
        className="overflow-x-auto rounded-lg bg-[#211d32] px-3 py-2 pb-3 pt-2 text-base"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};
