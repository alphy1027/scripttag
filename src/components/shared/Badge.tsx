import { siteConfig } from "@/config/site";
import { twMerge } from "tailwind-merge";

export default function Badge({ className }: { className?: string }) {
  return (
    <small className={twMerge("text-primary-foreground font-secondary font-semibold text-sm", className)}>
      {siteConfig.name}
    </small>
  );
}
