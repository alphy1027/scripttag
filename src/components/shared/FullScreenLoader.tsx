import { H3 } from "../ui/Typography";
import SectionWrapper from "./SectionWrapper";

export default function FullScreenLoader() {
  return (
    <SectionWrapper className="flex items-center justify-center flex-col flex-1">
      <H3 className="">Loading...</H3>
    </SectionWrapper>
  );
}
