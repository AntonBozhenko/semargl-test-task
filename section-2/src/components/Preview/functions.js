export function cancel(setFile) {
  setFile(null);
}

export function fileSize(file) {
  const sizeInBytes = file.size;
  const sizeInKb = sizeInBytes / 1024;
  const sizeInMb = sizeInKb / 1024;
  if (sizeInMb > 1) {
    return `${sizeInMb.toFixed(2)} MB`;
  } if (sizeInKb > 1) {
    return `${sizeInKb.toFixed(2)} KB`;
  }
  return `${sizeInBytes} Bytes`;
}
