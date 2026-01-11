import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../context/theme-provider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children} </ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export const setupScrollMock = () => {
    const mockScrollIntoView = vi.fn();
    const mockGetElementById = vi.spyOn(document, 'getElementById').mockReturnValue({
        scrollIntoView: mockScrollIntoView
    } as unknown as HTMLElement);
    return { mockGetElementById, mockScrollIntoView };
}

export * from '@testing-library/react';
export { customRender as render };