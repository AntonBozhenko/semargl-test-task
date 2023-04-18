import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerNav.module.scss';

export default function InnerNav() {
  return (
    <div className={styles.nav}>
      <Link to="/section-2/block-1">Блок 1</Link>
      <Link to="/section-2/block-2">Блок 2</Link>
      <Link to="/section-2/block-3">Блок 3</Link>
    </div>
  );
}
