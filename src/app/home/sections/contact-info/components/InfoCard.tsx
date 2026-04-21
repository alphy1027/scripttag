import { H5 } from "@/components/ui/Typography";
import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title: string;
  icon: FC;
  href: string;
};

export default function InfoCard({ children, href, title, icon: Icon }: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-border w-full max-w-100 flex items-center gap-6 group hover:bg-secondary hover:scale-105 duration-300 ease-in"
    >
      <Icon />
      <div className="flex flex-col gap-2">
        <H5>{title}</H5>
        <span className="text-muted-foreground text-sm">{children}</span>
      </div>
    </a>
  );
}
