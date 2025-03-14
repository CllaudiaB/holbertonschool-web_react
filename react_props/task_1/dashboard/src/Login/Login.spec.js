import { render, screen, waitFor} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import Login from "./Login";


describe("Login", () => {
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

    it("verify whether the input elements get focused whenever the related label is clicked", async () => {
        render(<Login />);

        const labelEmail = screen.getByLabelText(/email:/i);
        const labelPassword = screen.getByLabelText(/password:/i);
    
        userEvent.click(labelEmail);
        
        await waitFor(() => {
            const inputEmail = screen.getByLabelText(/email/i, { selector: "input" });
            expect(inputEmail).toHaveFocus();
        });
    
        userEvent.click(labelPassword);

        await waitFor(() => {
            const inputPassword = screen.getByLabelText(/password/i, { selector: "input" });
            expect(inputPassword).toHaveFocus();
        });
    });
});
