export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:courtezj23@gmail.com" className="hover:text-cyan-400 transition-colors">
                  courtezj23@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/tcj9" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/courtezjones" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Philosophy</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Technology strengthens communities, advances equality, and scales responsibly.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {currentYear} Courtez Jones. Building systems that endure.</p>
        </div>
      </div>
    </footer>
  )
}
