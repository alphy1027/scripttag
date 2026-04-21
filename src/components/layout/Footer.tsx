import SectionWrapper from "../shared/SectionWrapper";
import Navbar from "./nav/Navbar";
import Badge from "../shared/Badge";
import Copyright from "../shared/Copyright";
import SocialIcons from "../shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="text-center flex flex-col gap-2.5 pb-2">
      <SectionWrapper className="flex flex-col gap-4 items-center bg-primary">
        <Badge />
        <Navbar />
        <SocialIcons />
      </SectionWrapper>
      <Copyright />
    </footer>
  );
}
