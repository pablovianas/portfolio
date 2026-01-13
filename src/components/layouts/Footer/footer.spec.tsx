import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { Footer } from ".";
import { render, setupScrollMock } from "../../../tests/test-utils";

describe("Footer", () => {
    it("should render successfully", () => {
        const { container } = render(<Footer />);
        expect(container).toBeInTheDocument();
    });

    it("should render brand name", () => {
        render(<Footer />);
        expect(screen.getByText(/Pablo./)).toBeInTheDocument();
    });

    it("should render brand tagline", () => {
        render(<Footer />);
        expect(
            screen.getByText(
                "Transformando ideias em experiências digitais excepcionais",
            ),
        ).toBeInTheDocument();
    });

    it("should render navigation section title", () => {
        render(<Footer />);
        expect(screen.getByText("Navegação")).toBeInTheDocument();
    });

    it("should render all navigation links", () => {
        render(<Footer />);

        expect(screen.getByText("Início")).toBeInTheDocument();
        expect(screen.getByText("Skills")).toBeInTheDocument();
        expect(screen.getByText("Projetos")).toBeInTheDocument();
    });

    it("should render contact section title", () => {
        render(<Footer />);
        expect(screen.getByText("Contato")).toBeInTheDocument();
    });

    it("should render all contact links", () => {
        render(<Footer />);

        const emailLinks = screen.getAllByText("Email");
        const linkedinLinks = screen.getAllByText("LinkedIn");
        const githubLinks = screen.getAllByText("GitHub");

        expect(emailLinks.length).toBeGreaterThan(0);
        expect(linkedinLinks.length).toBeGreaterThan(0);
        expect(githubLinks.length).toBeGreaterThan(0);
    });

    it("should render contact links with correct href attributes", () => {
        render(<Footer />);

        const links = screen.getAllByRole("link");
        const emailLink = links.find(
            (link) =>
                link.getAttribute("href") === "mailto:pabloviana2010@gmail.comm",
        );
        const linkedinLink = links.find(
            (link) =>
                link.getAttribute("href") ===
                "https://www.linkedin.com/in/pablo-viana-santos/",
        );
        const githubLink = links.find(
            (link) =>
                link.getAttribute("href") === "https://github.com/pablovianas",
        );

        expect(emailLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
        expect(githubLink).toBeInTheDocument();
    });

    it("should render social links with correct aria-labels", () => {
        render(<Footer />);

        const githubLink = screen.getByLabelText("GitHub");
        const linkedinLink = screen.getByLabelText("LinkedIn");
        const emailLink = screen.getByLabelText("Email");

        expect(githubLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();
        expect(emailLink).toBeInTheDocument();
    });

    it("should render social links with correct attributes", () => {
        render(<Footer />);

        const githubLink = screen.getByLabelText("GitHub");
        const linkedinLink = screen.getByLabelText("LinkedIn");

        expect(githubLink).toHaveAttribute(
            "href",
            "https://github.com/pablovianas",
        );
        expect(githubLink).toHaveAttribute("target", "_blank");
        expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

        expect(linkedinLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/pablo-viana-santos/",
        );
        expect(linkedinLink).toHaveAttribute("target", "_blank");
        expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("should render copyright text with current year", () => {
        render(<Footer />);

        const currentYear = new Date().getFullYear();
        expect(
            screen.getByText(new RegExp(`© ${currentYear} Pablo Viana`)),
        ).toBeInTheDocument();
    });

    it("should render copyright with heart and coffee text", () => {
        render(<Footer />);

        expect(screen.getByText(/Feito com/)).toBeInTheDocument();
        expect(screen.getByText(/e muito/)).toBeInTheDocument();
    });

    it("should render back to top button", () => {
        render(<Footer />);

        const backToTopButton = screen.getByLabelText("Voltar ao topo");
        expect(backToTopButton).toBeInTheDocument();
    });

    it("should scroll to top when back to top button is clicked", () => {
        const scrollToMock = vi.fn();
        window.scrollTo = scrollToMock;

        render(<Footer />);

        const backToTopButton = screen.getByLabelText("Voltar ao topo");
        fireEvent.click(backToTopButton);

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });

    it("should scroll to section when navigation link is clicked", () => {
        const { mockGetElementById, mockScrollIntoView } = setupScrollMock();

        render(<Footer />);

        const inicioLink = screen.getByText("Início");
        fireEvent.click(inicioLink);

        expect(mockGetElementById).toHaveBeenCalledWith("home");
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

        mockGetElementById.mockRestore();
    });

    it("should render footer section with correct id", () => {
        const { container } = render(<Footer />);

        const footerSection = container.querySelector("#contact");
        expect(footerSection).toBeInTheDocument();
    });

    it("should have correct accessibility attributes for external links", () => {
        render(<Footer />);

        const externalLinks = screen
            .getAllByRole("link")
            .filter((link) => link.getAttribute("target") === "_blank");

        externalLinks.forEach((link) => {
            expect(link).toHaveAttribute("rel", "noopener noreferrer");
        });
    });
});
