import { LinkNavigation } from "./components/LinkNavigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  nextPage: string;
  prevPage: string;
};
export const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex w-full items-center justify-between text-sm">
      {isFirstPage ? (
        <div className="h-1 min-w-[240px]" />
      ) : (
        <LinkNavigation href={prevPage} type="prev">
          Anterior
        </LinkNavigation>
      )}

      <p>
        página {currentPage} de {totalPages}
      </p>

      {isLastPage ? (
        <div className="h-1 min-w-[240px]" />
      ) : (
        <LinkNavigation href={nextPage} type="next">
          Próxima
        </LinkNavigation>
      )}
    </div>
  );
};
