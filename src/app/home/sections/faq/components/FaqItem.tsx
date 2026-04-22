import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq } from "../content/faq-content";

export function FaqItem({ faq }: { faq: Faq }) {
  return (
    <AccordionItem value={faq.id.toString()}>
      <AccordionTrigger>{faq.question}</AccordionTrigger>
      <AccordionContent>{faq.answer}</AccordionContent>
    </AccordionItem>
  );
}
