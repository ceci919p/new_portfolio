import Link from "next/link";
const NavItem = ({ text, href, active, navActive }) => {
  return (
    <Link
      href={href}
      className={`nav__menu-link ${active ? "active" : ""} ${
        !navActive && text === "Contact" ? "button" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default NavItem;
