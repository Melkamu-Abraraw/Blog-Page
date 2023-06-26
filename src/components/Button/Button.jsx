import React from "react";
import buttonStyle from "./Button.module.css";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <div>
      <Link href={url}>
        <button className={buttonStyle.button}>{text}</button>
      </Link>
    </div>
  );
};

export default Button;
