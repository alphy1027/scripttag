import { H5, P } from "@/components/ui/Typography";
import type { FC } from "react";

export default function TrackingPointCard({
  icon: Icon,
  title,
  children,
}: {
  icon: FC;
  title: string;
  children: string;
}) {
  return (
    <div className="flex flex-col gap-4  max-w-60 md:max-w-52 items-center p-4 md:p-6">
      <Icon />
      <H5 className="text-center">{title}</H5>
      <P className="text-muted-foreground text-sm text-center">{children}</P>
    </div>
  );
}
