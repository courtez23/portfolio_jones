import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "";

  // Don't render on home page
  if (isHome) return null;

  return (
    <motion.nav
      className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors min-h-11 text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Home
        </Link>
      </div>
    </motion.nav>
  );
}
