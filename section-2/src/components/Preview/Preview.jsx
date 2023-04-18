/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Preview.module.scss';
import { cancel, fileSize } from './functions';

export default function Preview({ file, setFile }) {
  return (
    <div className={styles.preview}>
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
      />
      <div>
        <p>
          Имя:
          {' '}
          {file.name}
        </p>
        <p>
          Тип:
          {' '}
          {file.type}
        </p>
        <p>
          Размер:
          {' '}
          {fileSize(file)}
        </p>
      </div>
      <button type="button" onClick={() => { cancel(setFile); }}>Отменить загрузку</button>
    </div>
  );
}
