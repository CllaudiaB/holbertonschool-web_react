import {render, screen} from '@testing-library/react'
import Footer from './Footer'

describe("Footer", () => {
    it("check elements", () => {
        render(<Footer isIndex={true}/>);

        if(isIndex) {
          const paragraph = screen.getByText(`Copyright 2025 - Hlberton School`);
        }

        expect(paragraph).toBeInTheDocument();
      });
});
