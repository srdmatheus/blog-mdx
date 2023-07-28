import Link from "next/link";

import { ArrowLeft } from "@/components/Icons";
export const BackButton = () => {
  return (
    <Link
      href="/"
      className="group flex items-center justify-start gap-2 text-sm ring-link transition-all duration-300 hover:ring-2"
    >
      <ArrowLeft
        size={18}
        className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-link"
      />{" "}
      <span className="transition-all duration-300 group-hover:text-link">
        voltar
      </span>
    </Link>
  );
};
