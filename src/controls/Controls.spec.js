// Test away!
// Test away!
import React from "react";
import Controls from "./Controls";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

describe("should Controls the gate", () => {
  it("should render the Controls", () => {
    const div = document.createElement("div");
    render(<Controls />, div);
  });
});
