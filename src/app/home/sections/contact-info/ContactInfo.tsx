import SectionWrapper from "@/components/shared/SectionWrapper";
import InfoCard from "./components/InfoCard";
import { siteConfig } from "@/config/site";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import WhatsappIcon from "./icons/WhatsappIcon";

export default function ContactInfo() {
  return (
    <SectionWrapper className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <InfoCard href={siteConfig.contact.phone.link} title="Phone" icon={PhoneIcon}>
        {siteConfig.contact.phone.label}
      </InfoCard>
      <InfoCard href={siteConfig.contact.email.link} title="Email" icon={EmailIcon}>
        {siteConfig.contact.email.label}
      </InfoCard>
      <InfoCard href={siteConfig.contact.whatsapp.link} title="Whatsapp" icon={WhatsappIcon}>
        {siteConfig.contact.whatsapp.label}
      </InfoCard>
    </SectionWrapper>
  );
}
