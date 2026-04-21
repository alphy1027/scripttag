import { H5, P } from "@/components/ui/Typography";

export default function ProcessCard({ children, title, order }: { children: string; title: string; order: number }) {
  return (
    <div className="card">
      <div className="flex flex-col gap-1">
        <P className="font-secondary font-extrabold text-xl text-muted-foreground">{`0${order}`}</P>
        <H5>{title}</H5>
      </div>
      <P className="text-sm text-muted-foreground">{children}</P>
    </div>
  );
}
