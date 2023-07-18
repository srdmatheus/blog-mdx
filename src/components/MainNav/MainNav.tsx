import { MainNavType } from "@/types";

import * as S from "./styles";

export const MainNav = ({ mainNav }: MainNavType) => {
  return (
    <S.Nav>
      <S.List>
        {mainNav.map(({ title, href }) => (
          <S.ListItem key={href}>
            <S.NavLink href={href}>{title}</S.NavLink>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
};
