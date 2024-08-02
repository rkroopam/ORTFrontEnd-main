import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyCustomTextField from "../CustomTextField";

console.error = jest.fn();

describe("MyCustomTextField Component", () => {
  //TC-024
  test("renders without crashing", () => {
    render(<MyCustomTextField label="Test Label" />);
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
  });
  //TC-025
  test("displays the label text", () => {
    render(<MyCustomTextField label="Test Label" />);
    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
  });
  //TC-026
  test("displays the helper text", () => {
    render(
      <MyCustomTextField label="Test Label" helperText="Helper text here" />
    );
    expect(screen.getByText(/Helper text here/i)).toBeInTheDocument();
  });
  //TC-027
  test("accepts and displays user input", () => {
    render(<MyCustomTextField label="Test Label" />);
    const input = screen.getByLabelText(/Test Label/i);
    fireEvent.change(input, { target: { value: "Test input" } });
    expect(input).toHaveValue("Test input");
  });
  //TC-028
  test("disables the input when disabled prop is true", () => {
    render(<MyCustomTextField label="Test Label" disabled />);
    const input = screen.getByLabelText(/Test Label/i);
    expect(input).toBeDisabled();
  });
  //TC-029
  test("calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();
    render(<MyCustomTextField label="Test Label" onChange={handleChange} />);
    const input = screen.getByLabelText(/Test Label/i);
    fireEvent.change(input, { target: { value: "a" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
