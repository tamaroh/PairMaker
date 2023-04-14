import { render, screen } from "@testing-library/react";
// import App from "./App";
import Btn from "./components/Btn.jsx";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Btn", () => {
  test("renders Btn component", () => {
    render(<Btn />);
    const linkElement = screen.getByText(/make pairs/i);
    expect(linkElement).toBeInTheDocument();
  });
});

// test("Pairs are made without omission in the number of people.", () => {
//     render(<MakePair />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });
