import {render, screen} from '@testing-library/react'
import Notifications from './Notifications'


describe("Notifications", () => {
    it("Verify that there are 3 li elements", () => {
        render(<Notifications />);

        const items = screen.getAllByRole("listitem")
        expect(items).toHaveLength(3)
    });
});
