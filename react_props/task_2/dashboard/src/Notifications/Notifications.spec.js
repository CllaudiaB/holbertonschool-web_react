import { render, screen } from '@testing-library/react'
import Notifications from './Notifications'


const notifications = [
    { id: 1, type: 'default', value: 'Notification 1' },
    { id: 2, type: 'urgent', value: 'Notification 2' },
    { id: 3, type: 'default', value: 'Notification 3' },
];


describe("Notifications", () => {
    it("Verify that there are 3 li elements", () => {
        render(<Notifications notificationsList={notifications} />);

        const items = screen.getAllByRole("listitem")
        expect(items).toHaveLength(3)
    });
});
