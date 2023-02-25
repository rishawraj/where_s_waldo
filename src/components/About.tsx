import { useEffect } from "react";
import styles from "./About.module.css";

function About() {
  useEffect(() => {
    const footer = document.getElementById("footer");

    const animateBubble = (x: number) => {
      const bubble = document.createElement("div");
      bubble.className = `${styles.bubble}`;
      bubble.style.left = `${x}px`;

      footer?.appendChild(bubble);
      setTimeout(() => {
        footer?.removeChild(bubble);
      }, 2000);
    };

    window.onmousemove = (e) => {
      animateBubble(e.clientX);
    };
  }, []);

  return (
    <div style={styles} className={styles.container}>
      <h2>About</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.para}>
          Where's Waldo React App is a web-based application built using
          TypeScript, Vite, and Firebase as a backend for authentication and
          Firestore as a database. The application is designed to allow users to
          search for Waldo, a famous character in a picture filled with other
          people and objects.
        </div>

        <div className={styles.para}>
          The app was created as part of a course provided by The Odin Project,
          which is a free and open-source learning platform that provides a
          comprehensive curriculum for web development. The course focused on
          building a full-stack web application using modern technologies,
          including TypeScript, Vite, Firebase, and Firestore.
        </div>

        {/* <div className={styles.para}>
          TypeScript is a superset of JavaScript that adds static typing and
          other features to improve the development experience. Vite is a fast
          and lightweight build tool that allows developers to quickly develop
          and deploy web applications. Firebase is a platform that provides a
          suite of tools and services for developing web and mobile
          applications, including authentication, cloud storage, and real-time
          databases. Firestore is a NoSQL document database that enables
          real-time data synchronization between clients and servers.
        </div> */}

        <div className={styles.para}>
          The Where's Waldo React App allows users to sign up and log in using
          their email and password. Once logged in, users can upload a picture
          and select a difficulty level to play the game. The game board
          displays the picture with Waldo hidden somewhere within it. Users can
          use their mouse to click and highlight the location of Waldo, and once
          they find him, they can submit their answer and receive a score.
        </div>

        <div className={styles.para}>
          The app also features a leaderboard that displays the top scores of
          all players, encouraging friendly competition between users. The
          leaderboard is updated in real-time using Firestore's real-time
          synchronization capabilities.
        </div>

        <div className={styles.para}>
          In conclusion, the Where's Waldo React App is a fun and engaging
          web-based application that demonstrates the power and flexibility of
          modern web development technologies. It was created as part of a
          comprehensive course provided by The Odin Project, which provides an
          excellent resource for developers to learn and improve their skills.
        </div>
      </div>
      <div className={styles.footer} id="footer"></div>
    </div>
  );
}

export default About;
