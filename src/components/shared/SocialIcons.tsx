import { siteConfig } from "@/config/site";
import TwitterIcon from "../layout/icons/TwitterIcon";
import IconLink from "./IconLink";
import InstagramIcon from "../layout/icons/InstagramIcon";
import TiktokIcon from "../layout/icons/TiktokIcon";
import PinterestIcon from "../layout/icons/PinterestIcon";

export default function SocialIcons() {
  return (
    <section className="flex items-center gap-4">
      <IconLink href={siteConfig.socialLinks.twitter}>
        <TwitterIcon />
      </IconLink>
      <IconLink href={siteConfig.socialLinks.instagram}>
        <InstagramIcon />
      </IconLink>
      <IconLink href={siteConfig.socialLinks.tiktok}>
        <TiktokIcon />
      </IconLink>
      <IconLink href={siteConfig.socialLinks.pinterest}>
        <PinterestIcon />
      </IconLink>
    </section>
  );
}
