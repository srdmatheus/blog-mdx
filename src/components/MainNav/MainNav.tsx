"use client";

import { MainNavType } from "@/types";

import { ToggleButton } from "./components";
import { useMainNav } from "./hooks";
import * as S from "./styles";

export const MainNav = ({ mainNav }: MainNavType) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      {!isOpenMenu && (
        <S.Nav>
          <S.List>
            {mainNav.map(({ title, href }) => (
              <S.ListItem key={href}>
                <S.NavLink href={href}>{title}</S.NavLink>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      )}

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>

      {isOpenMenu && (
        <div className="fixed left-0 top-0 z-30 min-h-screen w-full overflow-hidden bg-neutral-600/10 backdrop-blur-md transition-all duration-300">
          <S.NavMobile>
            <S.ListMobile>
              {mainNav.map(({ title, href }) => (
                <S.ListItemMobile key={href}>
                  <S.NavLinkMobile href={href}>{title}</S.NavLinkMobile>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </div>
      )}
    </>
  );
};
