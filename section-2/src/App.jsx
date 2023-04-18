import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import InnerNav from './components/InnerNav/InnerNav';
import Block1 from './pages/Block1/Block1';
import Block2 from './pages/Block2/Block2';
import Block3 from './pages/Block3/Block3';

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Раздел 2</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/7192/7192856.png" sizes="16x16" />
      </Helmet>

      <InnerNav />

      <Routes>
        <Route path="/section-2/block-1" element={<Block1 />} />
        <Route path="/section-2/block-2" element={<Block2 />} />
        <Route path="/section-2/block-3" element={<Block3 />} />
      </Routes>
    </div>
  );
}
