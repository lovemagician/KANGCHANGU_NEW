"use client";

import styles from "../styles/shop.module.css";
import Image from "next/image";

export default function Shop() {
  return (
    <div className={styles.shopWrapper}>
      <div className={styles.container}>
        <div>
          <p>Hello, World!</p>
          <Image src={"/images/helloWorld-CD.webp"} alt="Hello, World! CD" width={360} height={360} />
        </div>
        <div>
          <p>rkdcksrn</p>
          <Image src={"/images/rkdcksrn-CD.webp"} alt="Hello, World! CD" width={360} height={360} />
        </div>
        <a href="https://forms.gle/AFjEeZcPN4ariEnC9" target="_blank">
          👉구매 신청👈
        </a>
      </div>
    </div>
  );
}
