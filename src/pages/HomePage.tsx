import HeroSection from '../components/HeroSection'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section — Cinematic Scrollytelling */}
      <HeroSection />

      {/* About Section - Placeholder */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-muted-foreground">About section coming soon</p>
      </section>

      {/* Projects Section - Placeholder */}
      <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
        <p className="text-lg text-muted-foreground">Projects section coming soon</p>
      </section>

      {/* Skills Section - Placeholder */}
      <section id="skills" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills &amp; Technologies</h2>
        <p className="text-lg text-muted-foreground">Skills section coming soon</p>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">Contact section coming soon</p>
      </section>
    </div>
  )
}
