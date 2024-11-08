import Image from "next/image";
import styles from "../styles/album.module.css";

interface IAlbumData {
  title: string;
  releaseDate: string;
  coverSrc: string;
  trackList: string[];
  credits: string[];
  youtubeLink1?: string;
  youtubeLink2?: string;
}

export default function Album({ title, releaseDate, coverSrc, trackList, credits, youtubeLink1, youtubeLink2 }: IAlbumData) {
  return (
    <div className={styles.albumInfo}>
      <p className={styles.albumTitle}>{title}</p>
      <p className={styles.releaseDate}>{releaseDate}</p>
      <Image width={360} height={360} src={coverSrc} alt={`${title} album cover image`} />
      <p className={styles.trackList}>
        [TRACK LIST]
        <br />
        {trackList.map((track: string) => (
          <span key={track}>
            {track}
            <br />
          </span>
        ))}
      </p>
      <p className={styles.credits}>
        [CREDITS]
        <br />
        {credits.map((credit: string) => (
          <span key={credit}>
            {credit}
            <br />
          </span>
        ))}
      </p>
      {youtubeLink1 && (
        <iframe
          className={styles.youtube}
          width="360"
          height="360"
          src={youtubeLink1}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      {youtubeLink2 && (
        <iframe
          className="youtube"
          width="360"
          height="360"
          src={youtubeLink2}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
