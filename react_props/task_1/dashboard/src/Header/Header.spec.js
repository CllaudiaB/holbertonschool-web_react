import Header from './Header'
import { render, screen } from '@testing-library/react'


describe("Header", () => {
    it("check if the h1 element with the text School dashboard", () => {
        render(<Header />);

        const title = screen.getByRole("heading", { level: 1, name: /School Dashboard/i });
        expect(title).toBeInTheDocument();
    });

    it("check if an img element is rendered", () => {
        render(<Header />);

        const image = screen.getByAltText(/holberton logo/i);
        expect(image).toBeInTheDocument();

        expect(logo).toHaveAttribute('src', holbertonLogo);
    });
});
