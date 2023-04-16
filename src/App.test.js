import { render, screen } from "@testing-library/react";
// import App from "./App";
import Btn from "./components/Btn.jsx";

describe("Btn", () => {
  test("renders Btn component", () => {
    render(<Btn />);
    const linkElement = screen.getByText(/make pairs/i);
    expect(linkElement).toBeInTheDocument();
  });
});