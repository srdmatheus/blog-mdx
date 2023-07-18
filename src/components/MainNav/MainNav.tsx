import Link from "next/link";

import { MainNavType } from "@/types";

import * as S from "./styles";

export const MainNav = ({ mainNav }: MainNavType) => {
  return (
    <S.Nav>
      <S.List>
        {mainNav.map(({ title, href }) => (
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
  );
};
