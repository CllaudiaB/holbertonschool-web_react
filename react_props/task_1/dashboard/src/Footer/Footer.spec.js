import {render, screen} from '@testing-library/react'
import Footer from './Footer'

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer/>);

        if(isIndex === true) {
          const paragraph = screen.getByText(`Copyright 2025 - Hlberton School`);
        }

        expect(paragraph).toBeInTheDocument();
      });
});
