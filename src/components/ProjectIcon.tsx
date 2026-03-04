/**
 * ProjectIcon — Renders a Lucide icon from a project's iconName
 *
 * Declared as a standalone component to satisfy the React compiler's
 * rule against creating components during render.
 */

import { getIconComponent } from "../data/projects";
import type { ProjectIconName } from "../data/types";

export default function ProjectIcon({
  name,
  className,
}: {
  name: ProjectIconName;
  className?: string;
}) {
  const Icon = getIconComponent(name);
  return <Icon className={className} />;
}
