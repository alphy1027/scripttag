interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a
      href={`#${href}`}
      className="px-1.5 md:px-3 text-sm md:text-base py-1 text-gray-400 inline-block hover:scale-105 duration-200 ease-in"
    >
      {label}
    </a>
  );
}
