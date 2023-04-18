export const operators = ['+', '-', '/', '*'];

export function calculate(setOperatorError, operator, operand1, operand2, setResult) {
  setOperatorError(false);
  if (operator) {
    if (operator === '+') {
      setResult(Number(operand1) + Number(operand2));
    } if (operator === '-') {
      setResult(Number(operand1) - Number(operand2));
    } if (operator === '/') {
      setResult(Number(operand1) / Number(operand2));
    } else if (operator === '*') {
      setResult(Number(operand1) * Number(operand2));
    }
  } else {
    setOperatorError(true);
    setTimeout(() => { setOperatorError(false); }, 1000);
  }
}
