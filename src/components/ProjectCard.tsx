import { Link } from "react-router";
import { motion } from "motion/react";
import { hoverElevateAnimation } from "../lib/animations";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  problem: string;
  image?: string;
  isFlagship?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  techStack,
  problem,
  image,
  isFlagship = false,
}: ProjectCardProps) {
  return (
    <motion.div {...hoverElevateAnimation} className="group">
      <Link to={`/projects/${id}`}>
        <div
          className={`rounded-lg overflow-hidden border transition-all ${
            isFlagship
              ? "border-cyan-500/50 bg-slate-800/40"
              : "border-slate-700/50 bg-slate-800/20"
          }`}
        >
          {/* Image */}
          {image && (
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Header */}
            <div>
              {isFlagship && (
                <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full mb-2">
                  Flagship
                </span>
              )}
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
            </div>

            {/* Problem Statement */}
            <p className="text-sm text-slate-400">{problem}</p>

            {/* Description */}
            <p className="text-slate-300 line-clamp-2">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span className="text-xs px-2 py-1 rounded text-slate-400">
                  +{techStack.length - 3} more
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-700/50">
              <span className="text-cyan-400 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                View Case Study →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
