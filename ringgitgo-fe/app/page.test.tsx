import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders the getting-started heading and documentation link", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /to get started, edit the page\.tsx file\./i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Documentation" }),
    ).toHaveAttribute("href", expect.stringContaining("https://nextjs.org/docs"));
  });
});
