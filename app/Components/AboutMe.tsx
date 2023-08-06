import React from "react";
import styles from "@/app/styles/page.module.css";
import profile from "../Image/AboutMe/Profile.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headerGradient}>About Me</h1>
      <div className={styles.flexRow}>
        <div className={styles.aboutMeImage}>
          <Image src={profile} alt="Profile" width={325} height={325} />
        </div>
        <div className={styles.aboutMeText}>
          <h2>Stuff About Me</h2>
          <p>
            Hi there! My name is Andrew and I am a student web developer. I
            enjoy creating websites that are accessible to the public. I have
            been coding for a couple of years now and have made a variety of
            functional websites besides this one. If you&apos;re interested, you
            can find links to them on my GitHub account. Currently, I am
            pursuing my associate&apos;s degree in computer science at Rio Hondo
            College. It&apos;s been a challenging but rewarding journey so far!
          </p>
          <div
            style={{
              margin: "2rem auto",
              width: "fit-content",
            }}
          >
            <a href="https://www.buymeacoffee.com/banagas25n">
              <button>Buy Me Some Coffee ☕😄</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
