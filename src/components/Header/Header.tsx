import { mainNavConfig } from "@/config";

import { Logo } from "@/components/Logo";
import { MainNav } from "@/components/MainNav";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <MainNav mainNav={mainNavConfig.mainNav} />
      </S.Content>
    </S.Container>
  );
};
