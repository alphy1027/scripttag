import SectionHeading from "@/components/shared/SectionHeading";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { H5, P } from "@/components/ui/Typography";

export default function ValuePoint() {
  return (
    <SectionWrapper className="flex flex-col md:flex-row gap-4 md:gap-10">
      <SectionHeading>Is your business missing opportunities online?</SectionHeading>
      <div className="md:w-2/3 flex flex-col gap-2">
        <P>
          Many businesses today either don’t have a website or are using outdated ones that don’t reflect the quality of
          their work.
        </P>
        <P>This makes it harder for customers to find you, trust your business, or even contact you.</P>
        <P>In a world where most people search online first, this means lost opportunities every day.</P>
        <H5>
          At ScriptTagg, we help you fix that. We build modern, fast, and professional websites that make your business
          stand out, build trust, and help you grow online.
        </H5>
      </div>
    </SectionWrapper>
  );
}
