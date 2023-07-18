import Image from "next/image";

import * as S from "./styles";

export const Profile = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Location>Terra do pão de queijo • Brasil</S.Location>
        <S.Title>
          Ei, Matheus Ribeiro aqui{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋🏼</span>
        </S.Title>
        <S.TextAbout>
          Um Desenvolvedor Front End morando na capital Mineira. Construindo
          coisas para o mundo pela internet.
        </S.TextAbout>
      </S.Content>

      <Image
        src="https://github.com/srdmatheus.png"
        alt="Imagem de perfil"
        width={176}
        height={176}
        priority
        className="rounded-full"
      />
    </S.Container>
  );
};
