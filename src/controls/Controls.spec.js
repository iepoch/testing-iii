// Test away!
// Test away!
import React from "react";
import Controls from "./Controls";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// afterAll(cleanup);

describe("should Controls the gate", () => {
  it("should render the Controls", () => {
    const div = document.createElement("div");
    render(<Controls />, div);
  });

  it("should render buttons closed and locked", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });

  it("should show open button when closed is clicked", () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);
    const closed = getByText(/close gate/i);
    fireEvent.click(closed);
    const opened = getByText(/open gate/i);
    expect(opened).toHaveTextContent(/open gate/i);
  });

  it("should show closed button when open is clicked", () => {
    const { getByText } = render(<Controls />);
    const opened = getByText(/open gate/i);
    fireEvent.click(opened);
    const closed = getByText(/close gate/i);
    expect(closed).toHaveTextContent(/close gate/i);
  });
});
