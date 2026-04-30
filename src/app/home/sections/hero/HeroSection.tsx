import SectionWrapper from "@/components/shared/SectionWrapper";
import { H1, P } from "@/components/ui/Typography";
import HeroIcon from "./icons/HeroIcon";
/* import HeroPrimaryBtn from "./components/HeroPrimaryBtn"; */

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-6">
      <SectionWrapper>
        <div className="max-w-180 mx-auto flex flex-col items-center gap-5">
          <H1 className="text-center text-primary-foreground max-w-160">
            We Build Websites That Help Your Business Grow Online
          </H1>
          <P className="text-center max-w-120 text-primary-foreground ">
            We design and develop fast, modern, and mobile-friendly websites for small and growing businesses in Kenya.
          </P>
          <div className="flex items-center gap-4 sm:gap-6">
            {/* <HeroPrimaryBtn /> */}

            <a href="#contact" className="text-secondary-foreground bg-secondary py-3 px-6 font-medium">
              Plan your website
            </a>

            <a href="#projects" className="border border-secondary text-secondary bg-transparent py-3 px-6 font-medium">
              Our Projects
            </a>
          </div>
        </div>
        <HeroIcon />
      </SectionWrapper>
    </div>
  );
}
