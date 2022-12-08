import React from 'react';
import styles from './AboutPhones.module.scss';

export const AboutPhones: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about_container}>
        <div className={styles.title}>
            About
        </div>
        <div className={styles.line}></div>
        <div className={styles.small_title}>
            And then there was Pro
        </div>
        <p className={styles.paragraph}>
            A transformative triple‑camera system that adds tons
            of capability without complexity.
          <br/>
          <br/>
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough
            to be called Pro.
        </p>
        <div className={styles.small_title}>
            Camera
        </div>
        <div className={styles.paragraph}>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone.
            Capture up to four times more scene. Get beautiful
            images in drastically lower light. Shoot the highest‑quality
            video in a smartphone — then edit with the same tools you
            love for photos. You’ve never shot with anything like it.
        </div>
        <div className={styles.small_title}>
            Shoot it. Flip it. Zoom it. Crop it.
            Cut it. Light it. Tweak it. Love it.
        </div>
        <div className={styles.paragraph}>
            iPhone 11 Pro lets you capture videos that
            are beautifully true to life, with greater detail
            and smoother motion. Epic processing power means it
            can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get
            more creative control, too, with four times more scene
            and powerful new editing tools to play with.
        </div>
      </div>
      <div className={styles.tech_container}>
        <div className={styles.title}>Tech specs</div>
        <div className={styles.line}></div>
        <div className={styles.specs}>

          <div className={styles.small_container}>
            <div className={styles.name}>Screen</div>
            <div className={styles.parameters}>6.5” OLED</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Resolution</div>
            <div className={styles.parameters}>2688x1242</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Processor</div>
            <div className={styles.parameters}>Apple A12 Bionic</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>RAM</div>
            <div className={styles.parameters}>3 GB</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Built in memory</div>
            <div className={styles.parameters}>64 GB</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Camera</div>
            <div className={styles.parameters}>12 Mp +
                12 Mp + 12 Mp (Triple)</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Zoom</div>
            <div className={styles.parameters}>Optical, 2x</div>
          </div>

          <div className={styles.small_container}>
            <div className={styles.name}>Cell</div>
            <div className={styles.parameters}>GSM, LTE, UMTS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
