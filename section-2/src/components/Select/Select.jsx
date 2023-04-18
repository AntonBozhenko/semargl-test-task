/* eslint-disable react/prop-types */
import React from 'react';
import handleSelectChange from './functions';

export default function Select({ select, setSelect }) {
  return (
    <select name="select" value={select} onChange={(event) => { handleSelectChange(event, setSelect); }}>
      <option value="all" selected>все</option>
      <option value="apple">Apple</option>
      <option value="samsung">Samsung</option>
      <option value="xiaomi">Xiaomi</option>
    </select>
  );
}
