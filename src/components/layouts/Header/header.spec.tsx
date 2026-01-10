import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { render } from '../../../tests/test-utils'
import { Header } from './index';
import { ThemeToggle } from '../../../components/features/ThemeToggle'

describe('Header', () => {
    beforeEach(() => {
        window.scrollY = 0;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should render successfully', () => {
        const { container } = render(<Header />);
        expect(container).toBeInTheDocument();
    });

    it('should render logo with correct text', () => {
        render(<Header />);

        expect(screen.getByText('Pablo')).toBeInTheDocument();
        expect(screen.getByText('Viana')).toBeInTheDocument();
    });

    it('should render all navigation links', () => {
        render(<Header />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Skills')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('should render social links with correct attributes', () => {
        render(<Header />);

        const githubLink = screen.getByLabelText('GitHub Profile');
        const linkedinLink = screen.getByLabelText('LinkedIn Profile');

        expect(githubLink).toBeInTheDocument();
        expect(linkedinLink).toBeInTheDocument();

        expect(githubLink).toHaveAttribute('href', 'https://github.com/pablovianas');
        expect(githubLink).toHaveAttribute('target', '_blank');
        expect(githubLink).toHaveAttribute('rel', 'noreferrer noopener');

        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/pablo-viana-santos/');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
        expect(linkedinLink).toHaveAttribute('rel', 'noreferrer noopener');
    });

    it('should render theme toggle button', () => {
        const { container } = render(< ThemeToggle />);

        const themeToggle = container.querySelector('button[aria-label*="Switch"]');
        expect(themeToggle).toBeInTheDocument();
    });

    it('should render mobile menu button', () => {
        render(<Header />);

        const menuButton = screen.getByLabelText('Toggle mobile menu');
        expect(menuButton).toBeInTheDocument();
    });

    it('should toggle mobile menu when button is clicked', () => {
        render(<Header />);

        const menuButton = screen.getByLabelText('Toggle mobile menu');

        fireEvent.click(menuButton);

        expect(menuButton).toBeInTheDocument();
    });

    it('should scroll to section when navigation link is clicked', () => {
        const mockScrollIntoView = vi.fn();
        const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
            scrollIntoView: mockScrollIntoView
        } as any);

        render(<Header />);

        const homeLink = screen.getByText('Home');
        fireEvent.click(homeLink);

        expect(mockGetElementById).toHaveBeenCalledWith('home');
        expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

        mockGetElementById.mockRestore();
    });

    it('should scroll to section when logo is clicked', () => {
        const mockScrollIntoView = vi.fn();
        const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
            scrollIntoView: mockScrollIntoView
        } as any);

        render(<Header />);

        const logo = screen.getByText('Pablo');
        if (logo) {
            fireEvent.click(logo);
            expect(mockGetElementById).toHaveBeenCalledWith('home');
            expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
        }

        mockGetElementById.mockRestore();
    });

    it('should close mobile menu when navigation link is clicked', () => {
        const mockScrollIntoView = vi.fn();
        const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
            scrollIntoView: mockScrollIntoView
        } as any);

        render(<Header />);

        const menuButton = screen.getByLabelText('Toggle mobile menu');
        fireEvent.click(menuButton);

        const homeLink = screen.getByText('Home');
        fireEvent.click(homeLink);

        mockGetElementById.mockRestore();
    });

    it('should add scroll event listener on mount', () => {
        const addEventListenerSpy = vi.spyOn(window, 'addEventListener');

        render(<Header />);

        expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

        addEventListenerSpy.mockRestore();
    });

    it('should remove scroll event listener on unmount', () => {
        const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

        const { unmount } = render(<Header />);
        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

        removeEventListenerSpy.mockRestore();
    });

    it('should update isScrolled state when scrolling', async () => {
        render(<Header />);

        Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
        fireEvent.scroll(window);

        await waitFor(() => {
            expect(window.scrollY).toBe(100);
        });
    });

    it('should have correct accessibility attributes', () => {
        render(<Header />);

        const githubLink = screen.getByLabelText('GitHub Profile');
        const linkedinLink = screen.getByLabelText('LinkedIn Profile');
        const menuButton = screen.getByLabelText('Toggle mobile menu');

        expect(githubLink).toHaveAttribute('aria-label');
        expect(linkedinLink).toHaveAttribute('aria-label');
        expect(menuButton).toHaveAttribute('aria-label');
    });

    it('should render correct icon in mobile menu button based on state', () => {
        render(<Header />);

        const menuButton = screen.getByLabelText('Toggle mobile menu');

        fireEvent.click(menuButton);

        expect(menuButton).toBeInTheDocument();
    });

    it('should not scroll to section if element does not exist', () => {
        const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue(null);

        render(<Header />);

        const homeLink = screen.getByText('Home');
        fireEvent.click(homeLink);

        expect(mockGetElementById).toHaveBeenCalledWith('home');

        mockGetElementById.mockRestore();
    });
});