import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from './App.module.scss';

export default function App() {
  const [text, setText] = useState(localStorage.getItem('text') || '');
  const [currentColor, setCurrentColor] = useState(localStorage.getItem('color') || '');

  function changeColor(event) {
    setCurrentColor(event.target.dataset.color);
    localStorage.setItem('color', event.target.dataset.color);
  }

  function changeText(event) {
    setText(event.target.value);
    localStorage.setItem('text', event.target.value);
  }

  return (
    <div className={styles.section1}>
      <Helmet>
        <title>Раздел 1</title>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/7192/7192810.png" sizes="16x16" />
      </Helmet>

      <div>
        <button data-color="red" type="button" className={(currentColor === 'red') && styles.active} onClick={changeColor}>красный</button>
        <button data-color="green" type="button" className={(currentColor === 'green') && styles.active} onClick={changeColor}>зеленый</button>
        <button data-color="blue" type="button" className={(currentColor === 'blue') && styles.active} onClick={changeColor}>синий</button>
      </div>

      <textarea name="text" id="text" cols="30" rows="10" onChange={changeText} value={text} />
    </div>
  );
}
