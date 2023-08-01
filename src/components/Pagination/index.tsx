import { PaginationData } from "@/types";

import { LinkNavigation } from "./components/LinkNavigation";

export const Pagination = ({ data }: PaginationData) => {
  const { currentPage, totalPages, nextPage, prevPage } = data;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex w-full items-center justify-between">
      {isFirstPage ? (
        <div className="h-1 min-w-[240px]" />
      ) : (
        <LinkNavigation href={prevPage} type="prev">
          Página anterior
        </LinkNavigation>
      )}

      <p>
        {currentPage} de {totalPages}
      </p>

      {isLastPage ? (
        <div className="h-1 min-w-[240px]" />
      ) : (
        <LinkNavigation href={nextPage} type="next">
          Próxima página
        </LinkNavigation>
      )}
    </div>
  );
};
