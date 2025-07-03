"use client";
import React from "react";
import Link from "next/link";
import style from "./upper-nav.module.css";
import { usePathname } from "next/navigation";

export default function UpperNav({ path, children }) {
  const pathName = usePathname();

  return (
    <>
      <Link
        href={path}
        className={
          pathName.startsWith(path)
            ? `${style.active} ${style.link}`
            : `${style.link}`
        }
      >
        {children}
      </Link>
    </>
  );
}
