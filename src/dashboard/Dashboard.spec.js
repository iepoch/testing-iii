// Test away
// Test away!
import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup)
describe("should Dashboard the gate", () => {
  it("should render the Dashboard", () => {
    render(<Dashboard />);
  });



  it("should check to see if gate is closed and locked", () => {
    const { getByText } = render(<Dashboard />
    );
    const closed = getByText(/close gate/i);
    fireEvent.click(closed);
    const locked = getByText(/lock gate/i);
    fireEvent.click(locked);
    const openGate = getByText(/open gate/i);
    expect(openGate).toHaveAttribute('disabled')

  });


});
