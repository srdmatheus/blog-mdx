import { SocialMedia } from "@/types";
import { render, screen } from "@testing-library/react";

import { GithubLogo } from "@/components/Icons";

import { Footer } from "./index";
const items: SocialMedia[] = [
  {
    name: "Home",
    href: "http://localhost:3000",
    icon: <GithubLogo />
  }
];

describe("<Footer />", () => {
  it("should render correctly", () => {
    render(<Footer items={items} />);

    const copyrightSection = screen.getByTestId("copySection");
    const linkSection = screen.getByTestId("linkSection");
    expect(copyrightSection).toBeVisible();
    expect(linkSection).toBeVisible();
  });
});
