import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "../content/projects-content";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel() {
  return (
    <Carousel className="flex flex-col gap-6">
      <CarouselContent className="max-w-105 sm:max-w-125">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="">
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-fit mr-[6%] md:mr-[10%] self-end flex items-center justify-between gap-4">
        <CarouselPrevious variant="ghost" className="p-5 border border-border text-border" />
        <CarouselNext variant="ghost" className="p-5 border border-border text-border" />
      </div>
    </Carousel>
  );
}
