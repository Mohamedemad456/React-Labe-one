//It is used in the Nav Layout

import { useLocation, Link } from "react-router-dom";
import styles from './BreadCrumbs.module.css'; // Import CSS module

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = '';

  // Split the path into breadcrumb items and create an array of crumbs
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      // Determine if the breadcrumb is the first or last item
      const isFirst = index === 0;
      const isLast = index === array.length - 1;

      return (
        <li
          className={`${styles.breadcrumbItem} ${isFirst ? styles.breadcrumbItemFirstChild : ''} ${isLast ? styles.breadcrumbItemLastChild : ''}`}
          key={crumb}
        >

            <Link to={currentLink} className={`${styles.breadcrumbTitle} text-decoration-none ${styles.breadcrumbInner}`}>
              {crumb}
            </Link>
        </li>
      );
    });

  return (
    <div className={styles.container}>
      <ul className={`list-unstyled ${styles.breadcrumb}`}>
        {crumbs}
      </ul>
    </div>
  );
}
