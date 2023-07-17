import Link from "next/link";

import { HeaderNav } from "@/types";

import { Logo } from "@/components/Logo";

import * as S from "./styles";

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            {items.mainNav.map(({ title, href }) => (
              <S.ListItem key={href}>
                <Link href={href}>{title}</Link>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
