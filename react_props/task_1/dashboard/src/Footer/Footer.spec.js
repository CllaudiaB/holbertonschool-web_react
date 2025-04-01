import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe("Footer", () => {
  it("check elements", () => {
    render(<Footer isIndex={true}/>);

    const paragraph = screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        content.includes(`Copyright 2025 - Holberton School`)
      );
    });

    expect(paragraph).toBeInTheDocument();
  });
});
