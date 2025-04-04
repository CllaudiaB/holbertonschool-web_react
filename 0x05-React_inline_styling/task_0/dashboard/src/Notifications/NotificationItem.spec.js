import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('should have blue color and data-notification-type set to "default" when type is "default"', () => {
    render(<NotificationItem type="default" value="New course available" />);

    const liElement = screen.getByText("New course available");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "default");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("blue");
  });

  it('should have red color and data-notification-type set to "urgent" when type is "urgent"', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);

    const liElement = screen.getByText("New resume available");

    expect(liElement).toBeInTheDocument();
    expect(liElement.tagName).toBe("LI");
    expect(liElement).toHaveAttribute("data-notification-type", "urgent");

    const style = window.getComputedStyle(liElement);
    expect(style.color).toBe("red");
  });

  it("should call markAsRead once", async () => {
    const handleClick = jest.fn();
    render(
      <NotificationItem markAsRead={handleClick} value="Test notification" />
    );
    fireEvent.click(screen.getByText("Test notification"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
