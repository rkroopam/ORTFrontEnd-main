import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PageNotFound from "../404";

console.error = jest.fn();

describe("PageNotFound", () => {
  test("renders the 404 heading", () => {
    render(<PageNotFound />);
    const headingElement = screen.getByText(/404/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the descriptive text", () => {
    render(<PageNotFound />);
    const descriptionElement = screen.getByText(/Something's missing./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders the additional text", () => {
    render(<PageNotFound />);
    const additionalTextElement = screen.getByText(
      /Sorry, we can't find that page. You'll find lots to explore on the home page./i
    );
    expect(additionalTextElement).toBeInTheDocument();
  });

  test('renders the "Back to Homepage" link', () => {
    render(<PageNotFound />);
    const linkElement = screen.getByRole("link", { name: /Back to Homepage/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('the "Back to Homepage" link has correct class', () => {
    render(<PageNotFound />);
    const linkElement = screen.getByRole("link", { name: /Back to Homepage/i });
    expect(linkElement).toHaveClass(
      "inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
    );
  });
});
