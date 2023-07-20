import Link from "next/link";

import { SocialMedia } from "@/types";

type FooterProps = {
  items: SocialMedia[];
};

export const Footer = ({ items }: FooterProps) => {
  const actualYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between border-t border-neutral-300 py-8">
      <span className="text-sm opacity-60">
        Alguns direitos reservados © {actualYear}
      </span>
      <ul className="flex gap-3 leading-none">
        {items.map((item) => (
          <li
            key={item.name}
            className="rounded-md border-link text-neutral-500 ring-link focus-within:ring-2 hover:text-link"
          >
            <Link href={item.href} title={item.name} className="block p-2">
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
