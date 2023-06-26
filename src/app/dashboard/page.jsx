"use client";
import React from "react";
import useSWR from "swr";
import Styles from "./page.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const About = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  console.log(data);
  if (error) return <div>failed to load</div>;
  return <div>Dashboard Page</div>;
};

export default About;
