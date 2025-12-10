import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import WorkPage from "./page";

describe("WorkPage", () => {
  const subject = () => {
    return render(<WorkPage />);
  };

  it("renders general message", () => {
    const { getByText } = subject();

    expect(getByText(/Check back soon/)).toBeInTheDocument();
  });
});
