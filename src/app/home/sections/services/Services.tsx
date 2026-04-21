import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { services } from "./content/service-content";
import ServiceCard from "./components/ServiceCard";

export default function Services() {
  return (
    <SectionWrapper className="flex flex-col gap-6">
      <SectionHeading>What we can do for your business</SectionHeading>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {services.map((service) => (
          <ServiceCard active={service.id === 3} key={service.id} title={service.title}>
            {service.description}
          </ServiceCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
