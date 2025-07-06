"use client";
import React, { useRef } from "react";
import style from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const ImageInput = useRef();

  function handlePickClick() {
    ImageInput.current.click();
  }

  return (
    <>
      <div className={style.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={style.controls}>
          <input
            className={style.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={ImageInput}
          />
          <button
            className={style.button}
            type="button"
            onClick={() => handlePickClick()}
          >
            Pick An Image
          </button>
        </div>
      </div>
    </>
  );
}
