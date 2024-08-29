import React from 'react';
import { useEffect } from "react";
import styles from './NotFound.module.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        // Save the current body background
        const originalBodyBackground = document.body.style.background;
    
        // Apply new body background
        document.body.style.background = 'url(http://salehriaz.com/404Page/img/bg_purple.png)';
        document.body.style.backgroundRepeat = 'repeat-x';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'left top';
    
        // Cleanup function to reset the body background
        return () => {
          document.body.style.background = originalBodyBackground;
        };
      }, []);


  return (
    <div>
    <div className={styles.stars}>
      <div className={styles.centralBody}>
        <img className={styles.image404} src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
        <NavLink to="/" className={styles.btnGoHome} target="_blank">GO BACK HOME </NavLink>
      </div>
      <div className={styles.objects}>
        <img className={styles.objectRocket} src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
        <div className={styles.earthMoon}>
          <img className={`${styles.objectEarth} ${styles.spinEarthOnHover}`} src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
          <img className={styles.objectMoon} src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
        </div>
        <div className={styles.boxAstronaut}>
          <img className={styles.objectAstronaut} src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
        </div>
      </div>
      <div className={styles.glowingStars}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;

