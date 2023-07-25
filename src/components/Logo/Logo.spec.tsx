import { render, screen } from "@testing-library/react";

import { Logo } from "./index";

describe("Logo", () => {
  it("should render successfully", () => {
    render(<Logo />);

    const logoText = screen.getByRole("heading", { name: "Logo" });

    expect(logoText).toBeVisible();
  });
});
