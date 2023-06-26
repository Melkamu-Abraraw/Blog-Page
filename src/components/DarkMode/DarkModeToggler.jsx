"use client";

import React, { useContext } from "react";
import styles from "./DarkModeToggler.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggler } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggler}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode == "dark" ? { right: "2px" } : { left: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
