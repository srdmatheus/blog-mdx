import { ReactElement } from "react";

import { RenderOptions, render } from "@testing-library/react";

interface customRenderProps {
  ui: ReactElement;
  options?: Omit<RenderOptions, "wrapper">;
}

const customRender = ({ ui, options }: customRenderProps) =>
  render(ui, { ...options });

export * from "@testing-library/react";
export { customRender as render };
