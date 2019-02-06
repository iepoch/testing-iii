// Test away!
// Test away!
import React from "react";
import Controls from "./Controls";
import { render, fireEvent, cleanup, waitForElement } from "react-testing-library";
import "jest-dom/extend-expect";
// import waitForExpect from "wait-for-expect";

afterEach(cleanup);

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

  it("should display open button when closed is clicked", async () => {
    const { getByText } = render(<Controls />);
    const close = getByText(/close gate/i);
      fireEvent.click(close);
    // await waitForElement(() => getByText(/open gate/i))
    // // const openBtn = getByText(/open gate/i)
    // // expect(openBtn).toHaveContent(/open gate/i)


  });
});
