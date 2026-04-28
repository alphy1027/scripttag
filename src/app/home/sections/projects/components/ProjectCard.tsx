import AppImage from "@/components/ui/AppImage";
import { H5, P } from "@/components/ui/Typography";
import type { Project } from "../content/projects-content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.actions.find((action) => action.label === "demo")?.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 flex flex-col gap-4 border border-gray-700"
    >
      <div className=" h-60 relative">
        <AppImage alt="ScriptTag projects" src={project.image} />
      </div>
      <div className="flex flex-col gap-1">
        <H5 className="text-primary-foreground">{project.title}</H5>
        <P className="text-muted-foreground text-sm">{project.description}</P>
      </div>
    </a>
  );
}
