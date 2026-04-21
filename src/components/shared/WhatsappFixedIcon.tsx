import { siteConfig } from "@/config/site";
import WhatsappIcon from "@/icons/WhatsappIcon";

export default function WhatsappFixedIcon() {
  return (
    <a
      href={`${siteConfig.contact.whatsapp.link}?text=Hi%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20website%20for%20my%20business.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 hover:scale-105 duration-300 ease-in"
    >
      <WhatsappIcon />
    </a>
  );
}
