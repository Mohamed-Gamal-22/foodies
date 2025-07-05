import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals() {
  // this code inserted just to delay for 2 seconds before return data
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("cant find data")
  return db.prepare("SELECT * FROM meals").all();
}
