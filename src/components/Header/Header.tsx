import Link from "next/link";

import { Logo } from "@/components/Logo";

import * as S from "./styles";

export const Header = () => {
  const navItems = [
    { name: "Início", href: "/" },
    { name: "Artigos", href: "/artigos" },
    { name: "Sobre", href: "/sobre" }
  ];

  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            {navItems.map(({ name, href }) => (
              <S.ListItem key={href}>
                <Link href={href}>{name}</Link>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
