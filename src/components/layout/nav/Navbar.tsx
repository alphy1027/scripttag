import NavLink from "./components/NavLink";

export const navLinks = [
  { to: "services", label: "Services" },
  { to: "process", label: "Process" },
  { to: "contact", label: "Contact us" },
];

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-wrap justify-center items-center gap-1 md:gap-2 w-fit">
        {navLinks.map((link) => (
          <li key={link.label} className="">
            <NavLink href={link.to} label={link.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
