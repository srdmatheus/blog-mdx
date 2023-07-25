type ListItemsProps = {
  children: React.ReactNode;
};

export const ListItem = ({ children }: ListItemsProps) => {
  return (
    <li className="transition-all duration-300 ease-in-out">{children}</li>
  );
};
