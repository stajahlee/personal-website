import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NotFound from "./not-found";

describe("NotFound", () => {
  const subject = () => {
    return render(<NotFound />);
  };

  it("renders a 404 Not found heading", () => {
    const { getByRole } = subject();

    const heading = getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("404 | Not found");
  });

  it("renders a lost in space subheading", () => {
    const { getByRole } = subject();

    const subheading = getByRole("heading", { level: 2 });

    expect(subheading).toHaveTextContent("lost in space");
  });

  it("renders a go home button that links to /", () => {
    const { getByRole } = subject();

    const goHomeButton = getByRole("link");

    expect(goHomeButton).toHaveTextContent("go home");
    expect(goHomeButton).toHaveAttribute("href", "/");
  });
});
