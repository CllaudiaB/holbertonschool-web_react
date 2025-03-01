import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Login from "./Login";


describe("Login", () => {
    it("check 2 p elements", () => {
        render(<Login />);
    
        const paragraph = screen.getByText(/login to access the full dashboard/i);
        expect(paragraph).toBeInTheDocument();
      });

    it("check input element", () => {
        render(<Login />);

        const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
        const inputPassword = screen.getByLabelText(/password/i, { selector: "input" });

        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
    });

    it("check label text", () => {
        render(<Login />);

        const labelEmail = screen.getByRole("textbox", { name: /email:/i });
        const labelPassword = screen.getByText(/password:/i);

        expect(labelEmail).toBeInTheDocument();
        expect(labelPassword).toBeInTheDocument();
    });

    it("check button with the text OK", () => {
        render(<Login />);

        const button = screen.getByRole("button", { name: /ok/i });
        expect(button).toBeInTheDocument();
    });

    it("check if input element get focus when label is clicked", () => {
        render(<Login />);

        const labelEmail = screen.getByLabelText(/email:/i);;
        const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });

        const labelPassword = screen.getByLabelText(/password:/i);
        const inputPassword = screen.getByLabelText(/password/i, { selector: "input" });

        userEvent.click(labelEmail);
        expect(inputEmail).toHaveFocus();

        userEvent.click(labelPassword);
        expect(inputPassword).toHaveFocus();
    });
});
