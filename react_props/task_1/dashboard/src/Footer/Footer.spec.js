import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from "../utils/utils.js";

jest.mock('../utils/utils.js', () => ({
  getCurrentYear: jest.fn(),
  getFooterCopy: jest.fn(),
}));

describe("Footer", () => {
  it("check elements", () => {

    const mockYear = 2025;
    const mockFooterCopy = "Holberton School";

    getCurrentYear.mockReturnValue(mockYear);
    getFooterCopy.mockReturnValue(mockFooterCopy);

    render(<Footer />);

    const paragraph = screen.getByText(`Copyright ${mockYear} - ${mockFooterCopy}`);
    expect(paragraph).toBeInTheDocument();
  });
});
