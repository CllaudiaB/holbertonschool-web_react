import { render, screen, fireEvent } from '@testing-library/react'
import Notifications from './Notifications'


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

    it("Verify that there are 3 li elements", () => {
        render(<Notifications />);

        const items = screen.getAllByRole("listitem")
        expect(items).toHaveLength(3)
    });

    it("logs 'Close button has been clicked' when the close button is clicked", () => {
        render(<Notifications />);

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const closeButton = screen.getByRole("button");
        fireEvent.click(closeButton);

        expect(consoleLogSpy).toHaveBeenCalledWith("Close button has been clicked");

        consoleLogSpy.mockRestore();
    });
});
