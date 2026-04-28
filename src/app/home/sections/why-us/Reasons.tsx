import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { reasons } from "./content/reasons-content";
import ReasonCard from "./components/ReasonCard";

export default function Reasons() {
  return (
    <SectionWrapper className="flex flex-col gap-6">
      <SectionHeading>Why choose ScriptTag?</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} title={reason.title}>
            {reason.description}
          </ReasonCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
