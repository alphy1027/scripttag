"use client";
import PageWrapper from "@/components/shared/PageWrapper";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { H2, H4 } from "@/components/ui/Typography";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <PageWrapper>
      <SectionWrapper className="flex flex-col gap-2">
        <H2 className="text-red-500 font-bold">Error</H2>
        <div className="">
          <H4 className="">Something has gone wrong, please try again!</H4>
          <p className="">{error.message}</p>
        </div>
        <Button onClick={() => reset()}>Try again</Button>
      </SectionWrapper>
    </PageWrapper>
  );
}
