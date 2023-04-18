import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import InnerNav from './components/InnerNav/InnerNav';
import styles from './App.module.scss';
import Submenu1 from './pages/submenu-1/Submenu1';
import Submenu2 from './pages/submenu-2/Submenu2';
import Submenu3 from './pages/submenu-3/Submenu3';

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Раздел 3</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/7192/7192903.png" sizes="16x16" />
      </Helmet>

      <div className={styles.section3}>
        <InnerNav />
        <Routes>
          <Route path="/section-3/submenu-1" element={<Submenu1 />} />
          <Route path="/section-3/submenu-2/:operand1" element={<Submenu2 />} />
          <Route path="/section-3/submenu-3" element={<Submenu3 />} />
        </Routes>

      </div>

    </div>
  );
}
