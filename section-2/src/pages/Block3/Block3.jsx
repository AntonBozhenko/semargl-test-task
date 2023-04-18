import React, { useState } from 'react';
import styles from './Block3.module.scss';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import Preview from '../../components/Preview/Preview';

export default function Block3() {
  const [file, setFile] = useState(null);

  return (
    <div className={styles.block3}>
      {!file ? (
        <ImageUploader setFile={setFile} />
      ) : (
        <Preview file={file} setFile={setFile} />
      )}
    </div>
  );
}
