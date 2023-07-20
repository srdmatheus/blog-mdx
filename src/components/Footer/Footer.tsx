import Link from "next/link";

import { SocialMedia } from "@/types";

import * as S from "./styles";

type FooterProps = {
  items: SocialMedia[];
};

export const Footer = ({ items }: FooterProps) => {
  const actualYear = new Date().getFullYear();
  return (
    <S.Container>
      <S.Copy>Alguns direitos reservados © {actualYear}</S.Copy>

      <S.ListSociaLinks>
        {items.map((item) => (
          <S.ItemSocialLinks key={item.name}>
            <Link
              href={item.href}
              title={item.name}
              className="block p-2"
              target="_blank"
            >
              {item.icon}
            </Link>
          </S.ItemSocialLinks>
        ))}
      </S.ListSociaLinks>
    </S.Container>
  );
};
