// Test away
// Test away!
import React from "react";
import Dashboard from "./Dashboard";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("should Dashboard the gate", () => {
  it("should render the Dashboard", () => {
    const div = document.createElement("div");
    render(<Dashboard />, div);
  });
});
