import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-md">
        <span className="text-sm leading-none opacity-60">
          Terra do pão de queijo, Brasil
        </span>
        <h1 className="text-3xl font-black leading-none tracking-tight">
          Ei, Matheus Ribeiro aqui{" "}
          <span className="inline-block origin-[70%_70%] animate-wave">👋🏼</span>
        </h1>
        <p className="mt-3 text-base leading-relaxed">
          Um Desenvolvedor Front-end morando em Belo Horizonte. Construindo
          coisas para o mundo pela internet.
        </p>
      </div>

      <Image
        src="https://github.com/srdmatheus.png"
        alt="Imagem de perfil"
        width={176}
        height={176}
        priority
        className="hidden rounded-full sm:block"
      />
    </div>
  );
};
