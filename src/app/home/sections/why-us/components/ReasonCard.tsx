import { H5, P } from "@/components/ui/Typography";

export default function ReasonCard({ title, children }: { title: string; children: string }) {
  return (
    <div className="flex flex-col gap-4 px-6 py-6 border border-border">
      <H5>{title}</H5>
      <P className="text-sm text-muted-foreground">{children}</P>
    </div>
  );
}
