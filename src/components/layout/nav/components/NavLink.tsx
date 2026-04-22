interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={`#${href}`}
      className="px-3 py-1 text-primary-foreground inline-block hover:scale-105 duration-200 ease-in"
    >
      {label}
    </a>
  );
}
