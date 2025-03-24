import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Notifications component", () => {
    render(<App />);

    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  it("Header component", () => {
    render(<App />);
  
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
  });

  it("Login component", () => {
    render(<App isLoggedIn={false} />);
    expect(
      screen.getByText(/Login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  it("Footer component", () => {
    render(<App />);
  
    expect(
      screen.getByText(/Holberton School/i)
    ).toBeInTheDocument();
  });

  it("should render the CourseListRow component when isLoggedIn is true", () => {
    render(<App isLoggedIn={true} />);

    const tableElement = screen.getByRole("table");

    expect(tableElement).toBeInTheDocument();
  });
});