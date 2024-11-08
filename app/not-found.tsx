import { Metadata } from "next";
import Image from "next/image";
import styles from "../styles/not-found.module.css";

export const metadata: Metadata = {
  title: "404 Not Found",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image className={styles.image} width={300} height={300} src="/images/not-found.webp" alt="not found" />
      <p className={styles.errorMessage}>Error 404</p>
      <span>존재하지 않는 페이지입니다.</span>
    </div>
  );
}
