import { Link } from "react-router";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
          >
            Courtez Jones
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle (placeholder) */}
          <button className="md:hidden text-slate-300 hover:text-cyan-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
