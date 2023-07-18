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
                <Link
                  className="rounded-sm ring-link ring-offset-4 ring-offset-primary transition-all duration-300 ease-in-out hover:text-link hover:ring-2
                  focus:bg-primary
                  focus:ring-2"
                  href={href}
                >
                  {title}
                </Link>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
