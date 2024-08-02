import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResetPassword from "./ResetPassword";
console.error = jest.fn();

// Mocking the API call and toast
jest.mock("../../../api/services/user", () => ({
  reset_password: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Helper function to render the component with Router
const renderComponent = (queryParams: string) => {
  window.history.pushState({}, "Test page", `/?${queryParams}`);
  render(
    <Router>
      <ResetPassword />
    </Router>
  );
};

describe("ResetPassword Component", () => {
  test("renders without crashing", () => {
    renderComponent("token=mock-token");
    expect(screen.getByText(/Set New Password/i)).toBeInTheDocument();
  });

  test("shows error message when passwords do not match", async () => {
    renderComponent("token=mock-token");

    fireEvent.change(screen.getByLabelText(/New Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "password321" },
    });
    fireEvent.click(screen.getByText(/Reset Password/i));

    // Validate that the error message appears in the form field helper text
    expect(
      await screen.findByText(/Passwords must match/i)
    ).toBeInTheDocument();
  });
});
