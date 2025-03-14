import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";


const currentYear = getCurrentYear();
const footerCopy = getFooterCopy(true);

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer isIndex="true"/>);
    
        const paragraph = screen.getByText(`Copyright ${currentYear} - Holberton School`);
        expect(paragraph).toBeInTheDocument();
      });
});
