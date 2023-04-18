/* eslint-disable react/prop-types */
import React from 'react';
import { handleDragOver, handleDrop, handleFileChange } from './functions';
import styles from './ImageUploader.module.scss';

export default function ImageUploader({ setFile }) {
  return (
    <>
      <p>Выберите файл или перетащите его в активную область</p>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => { handleFileChange(event, setFile); }}
      />
      <div
        className={styles.drop}
        onDrop={(event) => { handleDrop(event, setFile); }}
        onDragOver={(event) => { handleDragOver(event); }}
      />
    </>
  );
}
