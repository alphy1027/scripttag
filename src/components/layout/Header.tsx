import dynamic from "next/dynamic";
import SectionWrapper from "../shared/SectionWrapper";
import Navbar from "./nav/Navbar";
import Badge from "../shared/Badge";
const MobileNav = dynamic(() => import("./nav/MobileNav"));

export default function Header() {
  return (
    <header className="">
      <SectionWrapper className="flex items-center justify-between">
        <Badge />

        <div className="text-primary-foreground hidden md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </SectionWrapper>
    </header>
  );
}
