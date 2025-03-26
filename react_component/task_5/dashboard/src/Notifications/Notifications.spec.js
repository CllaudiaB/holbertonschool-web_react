import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  it("should not display close button, p element when displayDrawer is false", () => {
    render(<Notifications displayDrawer={false} notificationsList={[]} />);

    const button = screen.queryByAltText("Close icon");
    expect(button).not.toBeInTheDocument();

    const p = screen.queryByText(/Here is the list of notifications/i);
    expect(p).not.toBeInTheDocument();

    const noNotificationsText = screen.queryByText(/No new notification for now/i);
    expect(noNotificationsText).not.toBeInTheDocument();

    const notificationText = screen.getByText("Your notifications");
    expect(notificationText).toBeInTheDocument();
  });

  it("should display close button, p element when displayDrawer is true", () => {
    const notificationsList = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        value: "<strong>Urgent requirement</strong> - complete by EOD",
      },
    ];

    render(
      <Notifications
        notificationsList={notificationsList}
        displayDrawer={true}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const p = screen.getByText(/Here is the list of notifications/i);
    expect(p).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);

    const notificationText = screen.getByText("Your notifications");
    expect(notificationText).toBeInTheDocument();
  });

  it("should display 'No new notification for now' when displayDrawer is true and notificationsList is empty", () => {
    render(<Notifications displayDrawer={true} notificationsList={[]} />);

    const p = screen.getByText(/No new notification for now/i);
    expect(p).toBeInTheDocument();

    const notificationText = screen.getByText("Your notifications");
    expect(notificationText).toBeInTheDocument();
  });

  it("should display the text with the id in the console", async () => {
    const notificationsList = [
      { id: 1, type: "default", value: "Test notification" },
    ];
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {}); // Spy on console.log

    render(<Notifications notificationsList={notificationsList} />);

    const li = screen.getByText("Test notification");
    fireEvent.click(li);

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );

    consoleLogSpy.mockRestore();
  });
});
