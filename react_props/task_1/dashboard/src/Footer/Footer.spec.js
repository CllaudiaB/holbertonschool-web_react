import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe("Footer", () => {
  it("check elements", () => {
    render(<Footer />);

    const paragraph = screen.getByText("Copyright 2025 - Holberton School");
    expect(paragraph).toBeInTheDocument();
  });
});
