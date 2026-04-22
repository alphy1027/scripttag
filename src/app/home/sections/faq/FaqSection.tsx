import SectionWrapper from "@/components/shared/SectionWrapper";
import { faqs } from "./content/faq-content";
import { FaqItem } from "./components/FaqItem";
import SectionHeading from "@/components/shared/SectionHeading";
import { Accordion } from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <SectionWrapper className="flex flex-col items-center gap-6">
      <SectionHeading>Frequently asked questions</SectionHeading>
      <Accordion type="single" collapsible defaultValue="1" className="max-w-lg w-full">
        {faqs.map((faq) => (
          <FaqItem faq={faq} key={faq.id} />
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
