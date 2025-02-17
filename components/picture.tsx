"use client";
import ClickableImage from "./clickableImage";
import styles from "../styles/picture.module.css";

export default function Picture() {
  const pictureData = [
    {
      imageSrc: "/images/KANGCHANGU.webp",
    },
    {
      imageSrc: "/images/photo_CD1.webp",
    },
    {
      imageSrc: "/images/drawing_hill.webp",
    },
    {
      imageSrc: "/images/drawing_paperboat.webp",
    },
    {
      imageSrc: "/images/photo_kancho.webp",
    },
    {
      imageSrc: "/images/photo_bami-and-kancho.webp",
    },
    {
      imageSrc: "/images/photo_danswithme.webp",
    },
    {
      imageSrc: "/images/photo_sea.webp",
    },
    {
      imageSrc: "/images/photo_sun.webp",
    },
    {
      imageSrc: "/images/photo_lake.webp",
    },
    {
      imageSrc: "/images/photo_leaves2.webp",
    },
    {
      imageSrc: "/images/photo_leaves1.webp",
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
