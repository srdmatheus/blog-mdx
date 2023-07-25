"use client";

import Link from "next/link";

import { MainNavType } from "@/types";

import { List } from "@/components/List";

import { ToggleButton } from "./components";
import { useMainNav } from "./hooks";

export const MainNav = ({ mainNav }: MainNavType) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      {!isOpenMenu && (
        <nav className="hidden items-center justify-between md:flex">
          <List.Root>
            {mainNav.map(({ title, href }) => (
              <List.Item key={href}>
                <Link
                  href={href}
                  className="rounded-sm px-2 py-1 ring-link transition-all duration-300 ease-in-out hover:text-link focus:ring-2"
                >
                  {title}
                </Link>
              </List.Item>
            ))}
          </List.Root>
        </nav>
      )}

      <div className="z-50 flex transition-all duration-300 hover:text-link md:hidden">
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </div>

      {isOpenMenu && (
        <div className="fixed left-0 top-0 z-30 min-h-screen w-full overflow-hidden bg-neutral-600/10 backdrop-blur-md transition-all duration-300">
          <nav className="mx-auto mt-16 flex max-w-[80%] items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 shadow-lg backdrop-blur-lg">
            <ul className="mx-3 flex w-full flex-col divide-y divide-neutral-600">
              {mainNav.map(({ title, href }) => (
                <li key={href} className="text-center">
                  <Link
                    href={href}
                    className="block rounded-lg p-3 text-neutral-50 ring-link transition-all duration-300 hover:text-link focus:ring-2"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
