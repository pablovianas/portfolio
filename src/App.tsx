import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/theme-provider';
import { Header } from './components/layouts/Header';
import { Hero } from './components/sections/Hero';

const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Footer = lazy(() => import('./components/layouts/Footer').then(module => ({ default: module.Footer })));

const LoadingFallback = () => (
    <div style={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)'
    }}>
        Carregando...
    </div>
);

function App() {
    return (
        <ThemeProvider>
            <Header />
            <Hero />
            <Suspense fallback={<LoadingFallback />}>
                <Skills />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <Projects />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
                <Footer />
            </Suspense>
        </ThemeProvider>
    );
}

export default App;