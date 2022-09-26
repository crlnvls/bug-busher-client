/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Login from ".";

//const testFunc = jest.fn()

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it("Renders an input for username", () => {
    const input = screen.queryByRole("username");
    expect(input).toBeInTheDocument();
  });

  it("Renders an input for password", () => {
    const input = screen.queryByRole("password");
    expect(input).toBeInTheDocument();
  });

  it("Renders a button to login", () => {
    const input = screen.queryByRole("login");

    //await userEvent.click(input)
    //expect(testFunc).toHaveBeenCalled()
    expect(input).toBeInTheDocument();
  });
});
