import {render, screen} from '@testing-library/react'
import Notifications from './Notifications/Notifications'


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
});
