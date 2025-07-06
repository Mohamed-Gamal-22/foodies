"use client";
import React, { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setpickedImage] = useState(null);
  const ImageInput = useRef();

  function handlePickClick() {
    ImageInput.current.click();
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];

    if (!file) {
      setpickedImage(null);
      return;
    }

    // عشان نقدر نقرا مسار الملف اللي بنرفعه ع ويكون صح ونقدر نستخدمه بعدين
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setpickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className={style.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={style.controls}>
          <div className={style.preview}>
            {!pickedImage && <p>No Image Picked Yet!</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="image selected" fill />
            )}
          </div>
          <input
            className={style.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            required
            ref={ImageInput}
            onChange={(e) => handleChangeImage(e)}
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
