import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "About", href: "/#about" },
  { text: "Projects", href: "/#projects" },
  { text: "Playground", href: "/playground" },
  { text: "Contact", href: "mailto:ceciliejrg@hotmail.com" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image src={"/logo.svg"} alt="logo" height={50} width={50} />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`${navActive ? "active" : ""} nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <li
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem
                active={activeIdx === idx}
                text={menu.text}
                href={menu.href}
                navActive={navActive}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
