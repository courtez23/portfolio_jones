import { Link } from "react-router";
import { motion } from "motion/react";
import { staggerContainerInView } from "../lib/animations";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { getRandomFeaturedProjects } from "../data/projects";
import ProjectTeaserCard from "./ProjectTeaserCard";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  // Random featured projects: 1 flagship + 1 random support (changes every visit)
  const featured = useMemo(() => getRandomFeaturedProjects(), []);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="header-text">Featured Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Each project is a case study in solving real problems.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            ...staggerContainerInView,
            visible: {
              ...staggerContainerInView.visible,
              transition: {
                ...staggerContainerInView.visible.transition,
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featured.map((project) => (
            <ProjectTeaserCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors duration-300 group"
          >
            View All Projects
          </Link> */}
          <Link to="/projects">
            <Button
              size="lg"
              variant="ghost"
              className="mt-8 text-primary group hover:bg-primary/20 dark:hover:bg-primary/40 hover:text-primary transition-colors duration-300"
            >
              All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
