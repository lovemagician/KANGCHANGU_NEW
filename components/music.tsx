import Album from "./album";
import styles from "../styles/music.module.css";

export default function Music() {
  const albumData = [
    {
      title: "rkdcksrn",
      releaseDate: "2022.12.20",
      coverSrc: "/images/rkdcksrn.webp",
      trackList: ["01.수수께끼", "02.거꾸로 텔레파시", "03.약속", "04.바람과 꽃", "05.물길 따라 걷네", "06.나의 집", "07.노을", "08.Swim", "09.기다림", "10.내게 남은 것", "11.텅 빈 아파트", "12.허들"],
      credits: ["Produced, Written, Performed, Mixed, Artwork and Design by 강찬구", "-Drums 이예찬 (01,09)", "Mastered by 강승희 at SONIC KOREA MASTERING"],
      youtubeLink1: "https://www.youtube.com/embed/-5sk9LC2eQE?si=FDnqXyJZKtZ-uwH2",
    },
    {
      title: "연인",
      releaseDate: "2021.04.15",
      coverSrc: "/images/couple.webp",
      trackList: ["01.연인"],
      credits: [
        "Produced by 녹음실 타디스",
        "Co-produced by 고재현, 이기학",
        "Performed by",
        "Bass 이기학",
        "Drums 이예찬",
        "Guitars 강찬구",
        "Vocal 강찬구",
        " All Recorded by 류호건 at Studio Tardis",
        "Mixed by 류호건 at Studio Tardis",
        "Mastered by 류호건 at Studio Tardis",
        "Album Artwork by 알베르 키위",
      ],
      youtubeLink1: "https://www.youtube.com/embed/4lk5gxdGHGA?si=BTrldZH1g2RW9epB",
    },
    {
      title: "가끔 들리는 것",
      releaseDate: "2021.02.16",
      coverSrc: "/images/thingthatihearsometimes.webp",
      trackList: ["01.가끔 들리는 것 (Feat. 김일두)", "02.가끔 들리는 것 (Inst.)"],
      credits: [
        "Produced by 녹음실 타디스",
        "Co-produced by 고재현, 이기학",
        "Performed by",
        "Bass 이기학",
        "Guitars 강찬구",
        "Vocal 강찬구",
        "Featuring 김일두",
        "All Recorded by 류호건 at Studio Tardis",
        "Mixed by 류호건 at Studio Tardis",
        "Mastered by 류호건 at Studio Tardis",
        "통기타 빌려주신 분 최종민",
        "Album Artwork by 강찬구",
      ], // 전체 크레딧 추가
      youtubeLink1: "https://www.youtube.com/embed/XHybaJXXRLw?si=cBucSUUbtWVFwLlK",
    },
    {
      title: "똑같은 건 지겨워",
      releaseDate: "2020.12.15",
      coverSrc: "/images/imtiredofthesamedays.webp",
      trackList: ["01.똑같은 건 지겨워"],
      credits: [
        "Produced by 녹음실 타디스",
        "Co-produced by 고재현, 이기학",
        "Vocal Director 라태형",
        "Performed by",
        "Bass 이기학",
        "Drums 이예찬",
        "Guitars 강찬구",
        "Vocal 강찬구",
        "Featuring 김일두",
        "All Recorded by 류호건 at Studio Tardis",
        "Mixed by 류호건 at Studio Tardis",
        "Mastered by 류호건 at Studio Tardis",
        "Album Artwork by 강찬구",
      ], // 전체 크레딧 추가
      youtubeLink1: "https://www.youtube.com/embed/Bar33MLq2dY?si=LU2UWbLajGavr-CI",
    },
    {
      title: "아는 사람",
      releaseDate: "2020.10.20",
      coverSrc: "/images/someone.webp",
      trackList: ["01.아는 사람", "02.아.."],
      credits: [
        "Produced by 녹음실 타디스",
        "Co-produced by 강찬구, 이기학",
        "Performed by",
        "Bass 이기학",
        "Drums 이예찬",
        "Guitars 강찬구",
        "Vocal 강찬구",
        "Synth 강찬구",
        "All Recorded by 류호건 at Studio Tardis",
        "Mixed by 류호건 at Studio Tardis",
        "Mastered by 류호건 at Studio Tardis",
        "Album Artwork by 강찬구",
      ], // 전체 크레딧 추가
      youtubeLink1: "https://www.youtube.com/embed/7avjR-C-u40?si=95kNCO2FV7vcvKM9",
      youtubeLink2: "https://www.youtube.com/embed/H4Px0T72s_s",
    },
    {
      title: "내 얼굴",
      releaseDate: "2020.07.21",
      coverSrc: "/images/myface.webp",
      trackList: ["01.내 얼굴"],
      credits: [
        "Produced by 녹음실 타디스",
        "Co-produced by 강찬구, 고재현, 이기학",
        "Performed by",
        "Bass 이기학",
        "Drums 이예찬",
        "Guitars 강찬구",
        "Vocal 강찬구",
        "Synth 강찬구, 고재현",
        "Percussion 고재현",
        "All Recorded by 류호건 at Studio Tardis",
        "Mixed by 류호건 at Studio Tardis",
        "Mastered by 류호건 at Studio Tardis",
        "Album Artwork by 김형원",
      ], // 전체 크레딧 추가
      youtubeLink1: "https://www.youtube.com/embed/tedM3IHYJIo?si=S-sawTRjlOvpUOuL",
    },
  ];

  return (
    <div className={styles.musicWrapper}>
      {albumData.map((album) => (
        <Album key={album.title} {...album} />
      ))}
    </div>
  );
}
