import { mainNavConfig } from "@/config";

import { Logo } from "@/components/Logo";
import { MainNav } from "@/components/MainNav";

export const Header = () => {
  return (
    <header className="fixed z-40 flex h-16 w-full items-center border-b border-neutral-200 bg-neutral-100 shadow-sm transition-all duration-300 ease-out">
      <div className="mx-auto flex h-full w-full max-w-4xl items-center justify-between px-6">
        <Logo />

        <MainNav mainNav={mainNavConfig.mainNav} />
      </div>
    </header>
  );
};
