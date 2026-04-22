import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/Typography";

export default function ActionSection() {
  return (
    <SectionWrapper className="flex flex-col items-center gap-space-sm">
      <H3 className="font-bold">Let's get your business online today</H3>
      <Button variant="outline">Let's discuss your project</Button>
    </SectionWrapper>
  );
}
