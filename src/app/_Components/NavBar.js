"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../Assets/2024.png";
import newLogo from "../../Assets/2024-new.png";
import newTitleLogo from "../../Assets/2024-New-Title.png";

import menu from "../../Assets/icons/menu-icon.png";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "darknav" : ""}`}>
      <a href="/">
        <img src={newTitleLogo.src} alt="" className="logo" />
      </a>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/Agenda">Agenda</Link>
        </li>
        <li>
          <Link href="/Gala">Gala</Link>
        </li>
        <li>
          <Link href="/OC">OC</Link>
        </li>
        <li>
          <Link href="/Faci">Faci</Link>
        </li>
        <li>
          <Link href="/MerchHome">Merch</Link>
        </li>
        <li>
          <Link href="/FAQ">FAQ</Link>
        </li>
        <li>
          <Link href="/Partners">Partners</Link>
        </li>
        <li>
          <Link href="/Register" className="btn bt">
            Register
          </Link>
        </li>
      </ul>
      <img src={menu.src} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default NavBar;
