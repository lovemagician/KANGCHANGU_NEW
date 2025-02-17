"use client";

import { useEffect } from "react";
import styles from "../styles/main.module.css";
import Image from "next/image";

export default function Main() {
  useEffect(() => {
    const content = "2025.02.24. 앨범 발매!";
    const text = document.querySelector(".hello");
    let index = 0;

    function typing() {
      if (text) {
        text.textContent += content[index++];
        if (index >= content.length) {
          clearInterval(intervalId);
        }
      }
    }

    const intervalId = setInterval(typing, 150);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.main}>
        <div className={styles.main_wrapper}>
          <Image width={360} height={360} className={styles.mainImageBefore} src="/images/cover_before.webp" alt="메인 이미지" priority />
          <Image width={360} height={360} className={styles.mainImageAfter} src="/images/cover_after.webp" alt="메인 이미지" />
          <p className={`${styles.hello} hello`}></p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
