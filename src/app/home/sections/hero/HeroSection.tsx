import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/ui/Typography";

export default function HeroSection() {
  return (
    <div className="">
      <SectionWrapper>
        <div className="max-w-180 mx-auto flex flex-col items-center gap-5">
          <H1 className="text-center text-primary-foreground">We Build Websites That Help Your Business Grow Online</H1>
          <P className="text-center max-w-120 text-primary-foreground ">
            We design and develop fast, modern, and mobile-friendly websites for small and growing businesses in
            Nairobi.
          </P>
          <Button variant="secondary">Get Started</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
