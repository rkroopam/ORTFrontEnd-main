import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Instructions1 from "../InstructionPage1"; // Adjust the import path as necessary

// Mock the useNavigate hook
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Instructions1 Component", () => {
  it("should display the instructions text and next button", () => {
    render(
      <Router>
        <Instructions1 />
      </Router>
    );

    // Check if the main title is displayed
    expect(
      screen.getByRole("heading", { name: /here’s how it works/i })
    ).toBeInTheDocument();

    // Check if the instruction texts are displayed
    expect(
      screen.getByText(
        /Measure your reading accuracy by matching sounds to the correct letter combinations/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/On average, the test will take about 15 minutes/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /When the test is complete, you will be shown your result and possible next steps/i
      )
    ).toBeInTheDocument();

    // Check if the next button is displayed
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();

    // Check if the disclaimer text is displayed
    expect(
      screen.getByText(
        /Disclaimer: This test is not a formal diagnosis of dyslexia or any other reading disorder. It is intended to give an approximation of the test takers decoding abilities and offer solutions for improvement./i
      )
    ).toBeInTheDocument();
  });

  it("should navigate to the next page when 'Next' button is clicked", () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Instructions1 />} />
          <Route path="/instructions2" element={<div>Next Page</div>} />
        </Routes>
      </Router>
    );

    // Click the next button
    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    // Verify navigation to the next page
    expect(mockNavigate).toHaveBeenCalledWith("/instructions2");
  });
});
