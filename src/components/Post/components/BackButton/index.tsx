import Link from "next/link";

import { ArrowLeft } from "@/components/Icons";
export const BackButton = () => {
  return (
    <Link
      href="/"
      className="group flex items-center justify-center gap-2 rounded-md p-3 text-sm ring-link transition-all duration-300 focus:ring-2"
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
