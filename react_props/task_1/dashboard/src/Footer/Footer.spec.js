import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe("Footer", () => {
  it("check elements", () => {
    render(<Footer />);

    expect(screen.getByRole("paragraph")).toHaveTextContent("Copyright 2025 - Holberton School")
  });
});
