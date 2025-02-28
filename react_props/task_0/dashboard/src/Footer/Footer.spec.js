import {render, screen} from '@testing-library/react'
import Footer from './Footer'


describe("Footer", () => {
    it("check 2 p elements", () => {
        render(<Footer />);
    
        const paragraph = screen. getByText(/copyright 2025 - holberton school/i);
        expect(paragraph).toBeInTheDocument();
      });
});
