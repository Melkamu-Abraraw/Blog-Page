import React from "react";
import Styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Hero from "public/hero.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.item}>
        <h1 className={Styles.title}>
          Better Products With Venom ProductDesign
        </h1>
        <p className={Styles.desc}>
          Turning Your Dream to Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={Styles.item}>
        <Image src={Hero} alt="Hero Image " className={Styles.img} />
      </div>
    </div>
  );
};

export default Home;
