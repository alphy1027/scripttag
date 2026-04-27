import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { H3, P } from "@/components/ui/Typography";
import { siteConfig } from "@/config/site";
import ActionCall from "./icons/ActionCall";

export default function ActionSection() {
  return (
    <div className="bg-secondary py-3">
      <SectionWrapper className="flex flex-col items-center gap-space-sm ">
        <div className="flex flex-col items-center gap-2">
          <H3 className="font-bold text-center">Let's get your business online today</H3>
          <P className="text-center">Call us, Let's discuss your project</P>
        </div>
        <a
          href={siteConfig.contact.phone.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center border border-primary rounded-full p-1"
        >
          <div className="stroke-primary-foreground rounded-full p-2 bg-primary">
            <ActionCall />
          </div>
          <span className="font-medium px-3">Call us now!</span>
        </a>
      </SectionWrapper>
    </div>
  );
}
