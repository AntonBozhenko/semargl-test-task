import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.nav}>
      <Link to="/section-1">Раздел 1</Link>
      <Link to="/section-2">Раздел 2</Link>
      <Link to="/section-3">Раздел 3</Link>
    </div>
  );
}
