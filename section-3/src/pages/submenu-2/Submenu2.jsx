/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Submenu2.module.scss';
import { calculate, operators } from './functions';

export default function Submenu2() {
  const { operand1 } = useParams();
  const [operand2, setOperand2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);
  const [operatorError, setOperatorError] = useState(false);

  return (
    <div className={styles.submenu2}>
      <h1>Подменю 2</h1>
      <h2>Простой калькулятор</h2>
      <label htmlFor="operand2">Введите второй операнд</label>
      <input id="operand2" type="number" onChange={(event) => { setOperand2(event.target.value); }} value={operand2} />
      <p>Выберите оператор:</p>
      <div>
        {operators.map((el) => (
          <button type="button" className={el === operator && styles.active} onClick={() => { setOperator(el); }} key={el}>{el}</button>
        ))}
      </div>
      <button type="button" onClick={() => { calculate(setOperatorError, operator, operand1, operand2, setResult); }}>Посчитать</button>
      {operatorError && <p className={styles.error}>сначала выберите оператор</p>}
      <h2>Результат:</h2>
      <p>{result}</p>
    </div>
  );
}
