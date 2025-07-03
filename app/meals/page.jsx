import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious Meals, Created{" "}
          <span className={style.highlight}>By You</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. it is easy and fun
        </p>
        <p className={style.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <MealsGrid meals={[]}/> 
      </main>
    </>
  );
}
