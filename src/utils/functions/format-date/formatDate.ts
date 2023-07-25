export const formatDate = (
  date: string,
  type: "short" | "medium" | "long" | "full" = "medium"
) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: type
  }).format(new Date(date));
};
