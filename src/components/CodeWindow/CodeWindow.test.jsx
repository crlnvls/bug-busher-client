/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CodeWindow from ".";

describe("CodeWindow", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CodeWindow />
      </BrowserRouter>
    );
  });

  it("Displays a code window", () => {
    const codeWindow = screen.queryByRole("paragraph");

    expect(codeWindow).toBeInTheDocument();
  });
});
