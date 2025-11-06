import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            Jumadil ARS
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      {/* Simple footer */}
      <footer className="border-t border-slate-200/60 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Jumadil Abdul Rahman Sekian — Built with passion.
        </div>
      </footer>
    </div>
  );
}

export default App;
