import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerNav.module.scss';

export default function InnerNav() {
  const color = localStorage.getItem('color');

  return (
    <div className={styles[color]}>
      <div className={styles.submenunav}>
        <Link to="/section-3/submenu-1">Подменю 1</Link>
        <Link to="/section-3/submenu-2/1">Подменю 2</Link>
        <Link to="/section-3/submenu-3">Подменю 3</Link>
      </div>
    </div>

  );
}
