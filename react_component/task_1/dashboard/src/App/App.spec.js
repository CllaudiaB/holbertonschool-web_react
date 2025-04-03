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
    render(<App isLoggedIn={false}/>);

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

  it("when ctrl+h is pressed, logs out is called once", () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(logOutMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
  });

  it("when ctrl+h is pressed, logs out is called with the string Logging you out", () => {
    const logOutMock = jest.fn();
    render(<App isLoggedIn={true} logOut={logOutMock} />);

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    alertMock.mockRestore();
  });
});
