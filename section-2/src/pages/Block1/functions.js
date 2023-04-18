const phones = [
  { id: 1, manufacturer: 'apple', model: 'iphone 11' },
  { id: 2, manufacturer: 'apple', model: 'iphone 12' },
  { id: 3, manufacturer: 'samsung', model: 'galaxy s20' },
  { id: 4, manufacturer: 'samsung', model: 'galaxy s21' },
  { id: 5, manufacturer: 'xiaomi', model: 'mi 10' },
  { id: 6, manufacturer: 'xiaomi', model: 'mi 11' },
];

export function filterTable(select, tableText, setItems) {
  if (select === 'all') {
    const filteredItems = phones.filter((el) => el.model.includes(tableText));
    setItems(filteredItems);
    localStorage.setItem('items', JSON.stringify(filteredItems));
  } else {
    const filteredBySelectItems = phones.filter((el) => el.manufacturer === select);
    const filteredItems = filteredBySelectItems.filter((el) => el.model.includes(tableText));
    setItems(filteredItems);
    localStorage.setItem('items', JSON.stringify(filteredItems));
  }
}

export function handleTextChange(event, setTableText) {
  setTableText(event.target.value);
  localStorage.setItem('tableText', event.target.value);
}
