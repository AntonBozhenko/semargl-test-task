export function handleFileChange(event, setFile) {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);
}

export function handleDrop(event, setFile) {
  event.preventDefault();
  const selectedFile = event.dataTransfer.files[0];
  setFile(selectedFile);
}

export function handleDragOver(event) {
  event.preventDefault();
}
