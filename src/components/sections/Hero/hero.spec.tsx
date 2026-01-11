import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { Hero } from ".";
import { render, setupScrollMock } from "../../../tests/test-utils";

describe("Hero", () => {
    it("should render hero section with personal info", () => {
        render(<Hero />);

        expect(screen.getByText("Olá, eu sou")).toBeInTheDocument();
        expect(screen.getByText("Pablo Viana")).toBeInTheDocument();
    });

    it("should render CTA buttons", () => {
        render(<Hero />);

        expect(screen.getByText("Vamos conversar")).toBeInTheDocument();
        expect(screen.getByText("Ver projetos")).toBeInTheDocument();
    });

    it("should render social links", () => {
        render(<Hero />);

        const socialLinks = screen.getAllByRole("link");
        expect(socialLinks.length).toBeGreaterThan(0);

        socialLinks.forEach((link) => {
            expect(link).toHaveAttribute("aria-label");
        });
    });

    it("should render profile image with correct attributes", () => {
        render(<Hero />);

        const image = screen.getByAltText(/Foto de perfil de/);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("loading", "eager");
        expect(image).toHaveAttribute("width", "400");
        expect(image).toHaveAttribute("height", "400");
    });

    it("should scroll to projects when button is clicked", () => {
        const { mockGetElementById, mockScrollIntoView } = setupScrollMock();

        render(<Hero />);

        const projectsButton = screen.getByText("Ver projetos");
        fireEvent.click(projectsButton);

        expect(mockGetElementById).toHaveBeenCalledWith("projects");
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

        mockGetElementById.mockRestore();
    });

    it("should have correct accessibility attributes", () => {
        render(<Hero />);

        const linkedinButton = screen.getByLabelText("Conectar no LinkedIn");
        const projectsButton = screen.getByLabelText("Ver projetos");

        expect(linkedinButton).toBeInTheDocument();
        expect(projectsButton).toBeInTheDocument();
    });
});
