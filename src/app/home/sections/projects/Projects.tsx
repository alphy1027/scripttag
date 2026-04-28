import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { P } from "@/components/ui/Typography";
import ProjectsCarousel from "./components/ProjectsCarousel";

export default function Projects() {
  return (
    <section id="projects" className="bg-foreground pt-4 pb-8 flex flex-col gap-6">
      <SectionWrapper className="">
        <div className="flex flex-col gap-2">
          <SectionHeading className="text-background">Some of Our Works</SectionHeading>
          <P className="text-muted">Real websites built to help businesses grow</P>
        </div>
      </SectionWrapper>
      <div className="pl-4 sm:pl-6 lg:pl-8">
        <ProjectsCarousel />
      </div>
    </section>
  );
}
