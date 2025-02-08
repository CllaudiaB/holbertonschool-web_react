import {render, screen} from '@testing-library/react'
import App from './App'


describe("App", () => {
    it("check if the h1 element with the text School dashboard", () => {
      render(<App />);
  
      const title = screen.getByText("School dashboard");
      expect(title).toBeInTheDocument();
    });

    it("check 2 p elements", () => {
        render(<App />);
    
        const paragraph1 = screen.getByText("Login to access the full dashboard");
        const paragraph2 = screen. getByText("Copyright 2025 - holberton School");
        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
      });

      it("check if an img element is rendered", () => {
        render(<App />);
    
        const image = screen.getByAltText("holberton logo");
        expect(image).toBeInTheDocument();
      });
  });
