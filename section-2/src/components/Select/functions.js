export default function handleSelectChange(event, setSelect) {
  setSelect(event.target.value);
  localStorage.setItem('select', event.target.value);
}
