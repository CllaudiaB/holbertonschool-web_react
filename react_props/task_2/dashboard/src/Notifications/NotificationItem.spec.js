import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('should have blue color and data-notification-type set to "default" when type is "default"', () => {
    render(<NotificationItem type="default" value="New course available" />);

    const liElement = screen.getByText("New course available");

    expect(liElement).toHaveStyle("color: blue");
    expect(liElement).toHaveAttribute("data-notification-type", "default");
  });

  it('should have red color and data-notification-type set to "urgent" when type is "urgent"', () => {
    render(<NotificationItem type="urgent" value="New resume available" />);

    const liElement = screen.getByText("New resume available");

    expect(liElement).toHaveStyle("color: red");
    expect(liElement).toHaveAttribute("data-notification-type", "urgent");
  });
});
