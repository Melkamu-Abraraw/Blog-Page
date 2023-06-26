import Styles from "./page.module.css";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkMode/DarkModeToggler";

const Navbar = () => {
  return (
    <div className={Styles.container}>
      <Link href="/" className={Styles.logo}>
        Venom
      </Link>
      <div className={Styles.links}>
        <DarkModeToggle />
        <Link key="1" href="/" className={Styles.link}>
          Home
        </Link>
        <Link key="2" href="/blog" className={Styles.link}>
          Blog
        </Link>
        <Link key="3" href="/about" className={Styles.link}>
          About
        </Link>
        <Link key="4" href="/contact" className={Styles.link}>
          Contact
        </Link>
        <Link key="5" href="/portfolio" className={Styles.link}>
          Portfolio
        </Link>
        <Link key="6" href="/dashboard" className={Styles.link}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
