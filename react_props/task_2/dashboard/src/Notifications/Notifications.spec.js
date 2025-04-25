import {render, screen, fireEvent, getAllByDisplayValue} from '@testing-library/react'
import Notifications from './Notifications'
import { getLatestNotification } from '../utils/utils';

describe("Notifications", () => {
    it("check the existence of the notifications title Here is the list of notifications", () => {
      render(<Notifications />);
  
      const title = screen.getByText(/Here is the list of notifications/i);
      expect(title).toBeInTheDocument();
    });

    it("check button", () => {
        render(<Notifications />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("test child component", () => {
    const testNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification()},
        ];
    const { getByText } = render(<Notifications notificationsList={testNotifications}/>);

    expect(getByText(/New course available/i)).toBeInTheDocument();
    expect(getByText(/New resume available/i)).toBeInTheDocument();
    const lastItem = getByText('complete by EOD', { exact: false })
    expect(lastItem.textContent).toEqual("Urgent requirement - complete by EOD");
    });

    it("logs 'Close button has been clicked' when the close button is clicked", () => {
        render(<Notifications />);

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);

        expect(consoleLogSpy).toHaveBeenCalledWith("Close button has been clicked");

        consoleLogSpy.mockRestore();
    });
});
