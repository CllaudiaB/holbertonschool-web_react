import {render, screen} from '@testing-library/react'
import Footer from './Footer'
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";


const text = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer />);
    
        const paragraph = screen.getByText(text);
        expect(paragraph).toBeInTheDocument();
      });
});
