export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* Hero Section - Placeholder */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Senior Software Engineer & Systems Architect
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Building reliable systems that scale. Defined by leadership, infrastructure literacy, and long-term thinking.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all">
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-slate-300">About section coming soon</p>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
        <p className="text-lg text-slate-300">Projects section coming soon</p>
      </section>

      {/* Skills Section - Placeholder */}
      <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
        <p className="text-lg text-slate-300">Skills section coming soon</p>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-slate-300">Contact section coming soon</p>
      </section>
    </div>
  )
}
