import { siteConfig } from "@/config/site";
import { twMerge } from "tailwind-merge";

export default function Badge({ className }: { className?: string }) {
  return (
    <small className={twMerge("text-primary-foreground font-secondary font-bold text-base", className)}>
      {siteConfig.name}
    </small>
  );
}
