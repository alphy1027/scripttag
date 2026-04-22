import PageWrapper from "@/components/shared/PageWrapper";
import ActionSection from "./home/sections/action-section/ActionSection";
import ContactInfo from "./home/sections/contact-info/ContactInfo";
import ContactForm from "./home/sections/ContactForm";
import ValuePoint from "./home/sections/value-section/ValuePoint";
import Services from "./home/sections/services/Services";
import Reasons from "./home/sections/why-us/Reasons";
import WorkingProcess from "./home/sections/process/WorkingProcess";
import HeroSection from "./home/sections/hero/HeroSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrackingPoints from "./home/sections/tracking-points/TrackingPoints";
import FaqSection from "./home/sections/faq/FaqSection";

export default function Home() {
  return (
    <>
      <div className="min-h-[70vh] bg-primary flex flex-col gap-y-8">
        <Header />
        <HeroSection />
      </div>
      <main className="flex-1 my-10">
        <PageWrapper>
          <TrackingPoints />
          <ValuePoint />
          <Services />
          <Reasons />
          <WorkingProcess />
          <ContactForm />
          <ContactInfo />
          <FaqSection />
          <ActionSection />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
}
