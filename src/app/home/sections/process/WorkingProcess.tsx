import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { process } from "./content/process-content";
import ProcessCard from "./components/ProcessCard";

export default function WorkingProcess() {
  return (
    <section id="process">
      <SectionWrapper className="flex flex-col gap-6">
        <SectionHeading>Our simple working process</SectionHeading>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {process.map((process) => (
            <ProcessCard key={process.id} order={process.id} title={process.title}>
              {process.description}
            </ProcessCard>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
