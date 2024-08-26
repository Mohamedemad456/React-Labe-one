import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from './NotFound.module.css';

const NotFound = () => {
  useEffect(() => {
    const createStars = () => {
      const starContainer = document.querySelector(`.${styles.spaceBackground}`);
      const numberOfStars = 50; // Adjust this number as needed

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add(styles.star);
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`; // Random size between 1px and 4px
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 120 + 80}s, ${Math.random() * 2 + 1.5}s`; // Random durations
        starContainer.appendChild(star);
      }
    };

    createStars();
  }, []); // Empty dependency array to run once on mount

  return (
    <Container fluid className="p-0 m-0">
      <div className={styles.spaceBackground}>
        {/* Stars are created dynamically by createStars */}
        
        {/* Floating Astronaut */}
        <img src='../assets/astronaut.png' alt="Astronaut" className={styles.astronaut} />

        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Lost in Space</h2>
        <p className={styles.description}>It looks like you’ve encountered a cosmic anomaly...</p>
        <Button href="/" variant="primary" className={styles.button}>Return to Earth</Button>
      </div>
    </Container>
  );
};

export default NotFound;
