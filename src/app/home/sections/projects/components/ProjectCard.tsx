import AppImage from "@/components/ui/AppImage";
import { H5, P } from "@/components/ui/Typography";

export default function ProjectCard({ src, title, description }: { src: string; title: string; description: string }) {
  return (
    <article className="p-4 flex flex-col gap-4 border border-gray-800">
      <div className=" h-60 relative">
        <AppImage alt="ScriptTag projects" src={src} />
      </div>
      <div className="flex flex-col gap-1">
        <H5 className="text-primary-foreground">{title}</H5>
        <P className="text-muted-foreground text-sm">{description}</P>
      </div>
    </article>
  );
}
