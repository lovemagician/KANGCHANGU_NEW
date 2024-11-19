import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <p className={styles.footer_name}>KANG CHAN GU</p>
          <a className={styles.footer_icon} href="https://www.youtube.com/@kangchangu" target="_blank">
            <Image width={42} height={42} src="/images/YouTube_icon.svg" alt="youtube" />
          </a>
          <a className={styles.footer_icon} href="https://soundcloud.com/rkdcksrn" target="_blank">
            <Image width={42} height={42} src="/images/soundcloud_icon.svg" alt="soundcloud" />
          </a>
          <a className={styles.footer_icon} href="https://www.instagram.com/rkdcksrn/" target="_blank">
            <Image width={42} height={42} src="/images/Instagram_icon.webp" alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}
