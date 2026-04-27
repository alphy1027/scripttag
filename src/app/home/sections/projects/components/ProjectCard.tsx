import AppImage from "@/components/ui/AppImage";
import { Button } from "@/components/ui/button";
import { H5, P } from "@/components/ui/Typography";
import type { Project } from "../content/projects-content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-4 flex flex-col gap-4 border border-gray-700">
      <div className=" h-60 relative">
        <AppImage alt="ScriptTag projects" src={project.image} />
      </div>
      <div className="flex flex-col gap-1">
        <H5 className="text-primary-foreground">{project.title}</H5>
        <P className="text-muted-foreground text-sm">{project.description}</P>
      </div>
      <div className="grid grid-cols-3 content-center gap-2">
        {project.actions.map((action) => (
          <a
            key={action.href}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border inline-flex justify-center items-center gap-2 py-2 px-4 bg-secondary"
          >
            <action.icon />
            <span className="">{action.label}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
