import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer/>);
        const footerText = getFooterCopy(true);
    
        const paragraph = screen.getByText(`Copyright ${getCurrentYear()} - Holberton School`);
        expect(paragraph).toBeInTheDocument();
      });
});
