import React from "react";
import { render, unmountComponentAtNode } from "@testing-library/react";
import WithLogging from "./WithLogging";

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

const MockAppWithLogging = WithLogging(MockApp);

describe("WithLogging HOC", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it("renders the Wrapped component and displays the correct text", () => {
    render(<MockAppWithLogging />, container);

    expect(container.querySelector("h1").textContent).toBe(
      "Hello from Mock App Component"
    );
  });

  it("logs the correct messages during mount and unmount", () => {
    console.log = jest.fn();

    const { unmount } = render(<MockAppWithLogging />, container);

    expect(console.log).toHaveBeenCalledWith("Component MockApp is mounted");

    unmount();
    expect(console.log).toHaveBeenCalledWith("Component MockApp is going to unmount");
  });
});
