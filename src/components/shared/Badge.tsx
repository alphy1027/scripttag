import { siteConfig } from "@/config/site";

export default function Badge() {
  return <small className="text-primary-foreground font-secondary font-semibold text-sm">{siteConfig.name}</small>;
}
