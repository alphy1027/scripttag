import { H5, P } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  children,
  title,
  active,
}: {
  children: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className={cn("card", active && "bg-primary")}>
      <H5 className={cn("", active && "text-primary-foreground")}>{title}</H5>
      <P className={cn("text-muted-foreground", active && "text-muted opacity-70")}>{children}</P>
    </div>
  );
}
