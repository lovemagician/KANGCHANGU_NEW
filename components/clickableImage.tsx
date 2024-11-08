"use client";
import Image from "next/image";
import styles from "../styles/clickableImage.module.css";

interface IClickableImageProps {
  imageSrc: string;
}

export default function ClickableImage({ imageSrc }: IClickableImageProps) {
  const handleClick = () => {
    window.open(imageSrc);
  };

  return (
    <div className={styles.imageBox}>
      <Image className={styles.image} src={imageSrc} alt="사진" width={116.66} height={116.66} onClick={handleClick} />
    </div>
  );
}
