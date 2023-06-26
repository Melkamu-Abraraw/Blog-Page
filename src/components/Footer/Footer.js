import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <p>&copy; 2023 Venom. All rights reserved.</p>
      <div className={Styles.social}>
        <Image
          src="/1.png"
          alt="Venom Dev Facebook Account"
          width={15}
          height={15}
          className={Styles.icon}
        />
        <Image
          src="/2.png"
          alt="Venom Dev"
          width={15}
          height={15}
          className={Styles.icon}
        />
        <Image
          src="/3.png"
          alt="Venom Dev"
          width={15}
          height={15}
          className={Styles.icon}
        />
        <Image
          src="/4.png"
          alt="Venom Dev"
          width={15}
          height={15}
          className={Styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
