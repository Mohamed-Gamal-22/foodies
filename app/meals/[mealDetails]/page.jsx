import React from "react";
import style from "./meal-details.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default async function MealDetails({ params }) {
  const meal = await getMeal(params.mealDetails);

  if(!meal){
    notFound()
  }

  let { title, slug, image, summary, instructions, creator, creator_email } =
    meal;

  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={style.headerText}>
          <h1>{title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={style.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{
            __html: `${instructions.replace(/\n/g, "<br />")}`,
          }}
        ></p>
      </main>
    </>
  );
}
