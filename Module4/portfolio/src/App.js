import { useState } from 'react';

import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';

import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header / Navigation */}
      <header className="header">
        <nav className="navbar">

          <a href="#home" className="logo">
            V. Harini
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </nav>
      </header>

      {/* Portfolio Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;