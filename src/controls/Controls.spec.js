// Test away!
// Test away!
import React from "react";
import Controls from "./Controls";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

// afterEach(cleanup);

describe("should Controls the gate", () => {
  it("should render the Controls", () => {
    render(<Controls />);
  });

  //Mocking the function

  it('should execute the passed function when the close toggle is clicked', () => {
    const toggleClosed = jest.fn();

    const { getByText } = render(<Controls
    toggleClosed= { toggleClosed } closed={ false } />);
    const button = getByText(/close gate/i);
    fireEvent.click(button);
    expect(toggleClosed).toHaveBeenCalledTimes(1);

  })

  // it("should render buttons closed and locked", () => {
  //   const { getByText } = render(<Controls closed={false} locked={false} />);
  //   getByText(/lock gate/i);
  //   getByText(/close gate/i);
  // });

  // it("should show open button when closed is clicked", () => {
  //   const { getByText } = render(<Controls closed={true} locked={false} />);
  //   const closed = getByText(/close gate/i);
  //   fireEvent.click(closed);
  //   const opened = getByText(/open gate/i);
  //   expect(opened).toHaveTextContent(/open gate/i);
  // });

  // it("should show closed button when open is clicked", () => {
  //   const { getByText } = render(<Controls />);
  //   const opened = getByText(/open gate/i);
  //   fireEvent.click(opened);
  //   const closed = getByText(/close gate/i);
  //   expect(closed).toHaveTextContent(/close gate/i);
  // });
});
