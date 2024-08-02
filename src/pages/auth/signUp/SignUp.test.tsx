import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUp from "../signUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { create_user } from "../../../api/services/user"; // Adjust the import path as necessary

console.error = jest.fn();

const queryClient = new QueryClient();

// Mock the create_user function and toast notifications
jest.mock("../../../api/services/user", () => ({
  create_user: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("SignUp Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display the signup form with all fields", () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    );

    // Check if the signup title is displayed
    expect(
      screen.getByRole("heading", { name: /sign up/i })
    ).toBeInTheDocument();

    // Check if all form fields are displayed
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Grade/i)).toBeInTheDocument();

    // Check if the submit button is displayed
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("submits form with correct data", async () => {
    // Mock successful API response
    (
      jest.requireMock("../../../api/services/user").create_user as jest.Mock
    ).mockResolvedValue({
      data: {},
      token: "fake-token",
    });

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText("First name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Country Code"), {
      target: { value: "+1" },
    });
    fireEvent.change(screen.getByLabelText("Age"), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByLabelText("Grade"), {
      target: { value: "A" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    // Ensure create_user is called
    await waitFor(() => {
      expect(create_user).toHaveBeenCalledWith({
        fName: "John",
        lName: "Doe",
        password: "password123",
        email: "john.doe@example.com",
        country: "", // Ensure this is the correct value or adjust the test if needed
        phoneNumber: "", // Ensure this is the correct value or adjust the test if needed
        phoneCountryCode: "+1",
        age: 30,
        grade: "A",
      });
      expect(toast.success).toHaveBeenCalledWith(
        "Verification link sent on email"
      );
    });
  });

  it("should reset form fields after submission", async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SignUp />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    );

    // Mock the form values
    fireEvent.change(screen.getByLabelText(/First name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Country Code/i), {
      target: { value: "+1" },
    });
    fireEvent.change(screen.getByLabelText(/Age/i), {
      target: { value: "30" },
    });
    fireEvent.change(screen.getByLabelText(/Grade/i), {
      target: { value: "A" },
    });

    // Mock the form submission
    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    // Wait for create_user function call
    await waitFor(() => {
      expect(create_user).toHaveBeenCalledWith({
        fName: "John",
        lName: "Doe",
        password: "password123",
        email: "john.doe@example.com",
        country: "", // Adjust if necessary
        phoneNumber: "", // Adjust if necessary
        phoneCountryCode: "+1",
        age: 30,
        grade: "A",
      });
    });

    // Check if the form fields are reset
    await waitFor(() => {
      expect(screen.getByLabelText(/First name/i)).toHaveValue("");
      expect(screen.getByLabelText(/Last name/i)).toHaveValue("");
      expect(screen.getByLabelText(/Password/i)).toHaveValue("");
      expect(screen.getByLabelText(/Email/i)).toHaveValue("");
      expect(screen.getByLabelText(/Country Code/i)).toHaveValue("");
      expect(screen.getByLabelText(/Age/i)).toHaveValue("");
      expect(screen.getByLabelText(/Grade/i)).toHaveValue("");
    });
  });
});
