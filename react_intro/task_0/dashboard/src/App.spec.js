import {getByRole, render, screen} from '@testing-library/react'
import App from './App'


describe("App", () => {
    it("check if the h1 element with the text School dashboard", () => {
      render(<App />);
  
      const title = screen.getByRole("heading", {level:1, desription:"School Dashboard"});
    });

    it("check 2 p elements", () => {
        render(<App />);
    
        const paragraph1 = screen.getByText(/login to access the full dashboard/i);
        const paragraph2 = screen. getByText(/copyright 2025 - holberton school/i);
        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
      });

      it("check if an img element is rendered", () => {
        render(<App />);
    
        const image = screen.getByAltText(/holberton logo/i);
        expect(image).toBeInTheDocument();
      });
  });
