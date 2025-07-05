import React, { Suspense } from "react";
import style from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious Meals, Created
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
        <Suspense
          fallback={
            <h1 className={style.loading}>loading... till data come</h1>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
