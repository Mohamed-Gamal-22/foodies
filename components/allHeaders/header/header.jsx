import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import style from "./main-header.module.css";
import MainHeader from "../main-header/main-header";
import UpperNav from "@/components/allHeaders/upper-nav/upper-nav";

export default function Header() {
  return (
    <>
      <MainHeader />
      <header className={style.header}>
        <Link className={style.logo} href="/">
          <Image src={logo} alt="a plate of food" priority />
          NextLvel Food
        </Link>

        {/* i cut this component to make it seprated to be use client */}
        <nav className={style.nav}>
          <ul>
            <il>
              <UpperNav path="/meals">Browse Meals</UpperNav>
            </il>
            <il>
              <UpperNav path="/community">Foodies Community</UpperNav>
            </il>
          </ul>
        </nav>
      </header>
    </>
  );
}
