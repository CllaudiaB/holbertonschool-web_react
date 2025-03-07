import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";


const currentYear = getCurrentYear();
const footerCopy = getFooterCopy(true);

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer />);
    
        const paragraph = screen.getByText(`Copyright ${currentYear} - ${footerCopy}`);
        expect(paragraph).toBeInTheDocument();
      });
});
