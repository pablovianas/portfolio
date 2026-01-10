import { ThemeProvider } from './context'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {

  return (
      <ThemeProvider>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
      </ThemeProvider>
  );
}

export default App
