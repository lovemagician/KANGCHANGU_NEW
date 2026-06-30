"use client";
import ClickableImage from "./clickableImage";
import styles from "../styles/picture.module.css";

export default function Picture() {
  const pictureData = [
    {
      imageSrc: "/images/KANGCHANGU.webp",
    },
    {
      imageSrc: "/images/drawing_hill.webp",
    },
    {
      imageSrc: "/images/city.webp",
    },
    {
      imageSrc: "/images/photo_nightsky.webp",
    },
    {
      imageSrc: "/images/photo_bluebuilding.webp",
    },

    {
      imageSrc: "/images/photo_nightsea.webp",
    },
    {
      imageSrc: "/images/photo_bulbul.webp",
    },
    {
      imageSrc: "/images/photo_kancho1.webp",
    },
    {
      imageSrc: "/images/photo_jeongokport.webp",
    },
    {
      imageSrc: "/images/photo_flowers.webp",
    },
    {
      imageSrc: "/images/photo_sunset.webp",
    },

    {
      imageSrc: "/images/photo_tomatoes.webp",
    },
  ];
  return (
    <div className={styles.pictureWrapper}>
      <div className={styles.container}>
        {pictureData.map((picture) => (
          <ClickableImage key={picture.imageSrc} {...picture} />
        ))}
      </div>
    </div>
  );
}
