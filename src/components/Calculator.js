import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css'; // Asegúrate de crear este archivo y definir tus estilos aquí

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    setCurrentValue(currentValue + number);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue('');
  };

  const calculate = () => {
    if (operator && previousValue && currentValue) {
      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      let result = '';

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '×':
          result = prev * current;
          break;
        case '÷':
          result = prev / current;
          break;
        default:
          return;
      }

      setCurrentValue(String(result));
      setOperator('');
      setPreviousValue('');
    }
  };

  const clear = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
  };

  const toggleSign = () => {
    setCurrentValue(currentValue.charAt(0) === '-' ? currentValue.substr(1) : '-' + currentValue);
  };

  const percent = () => {
    setCurrentValue(String(parseFloat(currentValue) / 100));
  };

  return (
    <div className="calculator">
      <div className="display">{currentValue || "0"}</div>
      <div className="button-row">
        <Button label="C" onClick={clear} className="clear" />
        <Button label="+/-" onClick={toggleSign} className="clear" />
        <Button label="%" onClick={percent} className="clear" /> 
        <Button label="÷" onClick={() => handleOperatorClick('÷')} className="operator" />
      </div>
      <div className="button-row">
        <Button label="7" onClick={() => handleNumberClick('7')} className="number" /> 
        <Button label="8" onClick={() => handleNumberClick('8')} className="number" /> 
        <Button label="9" onClick={() => handleNumberClick('9')} className="number" /> 
        <Button label="×" onClick={() => handleOperatorClick('×')} className="operator" />
      </div>
      <div className="button-row">
        <Button label="4" onClick={() => handleNumberClick('4')} className="number" /> 
        <Button label="5" onClick={() => handleNumberClick('5')} className="number" /> 
        <Button label="6" onClick={() => handleNumberClick('6')} className="number" /> 
        <Button label="-" onClick={() => handleOperatorClick('-')} className="operator" />
      </div>
      <div className="button-row">
        <Button label="1" onClick={() => handleNumberClick('1')} className="number" /> 
        <Button label="2" onClick={() => handleNumberClick('2')} className="number" /> 
        <Button label="3" onClick={() => handleNumberClick('3')} className="number" /> 
        <Button label="+" onClick={() => handleOperatorClick('+')} className="operator" />
      </div>
      <div className="button-row">
        <Button label="0" onClick={() => handleNumberClick('0')} className="zero" />
        <Button label="." onClick={() => handleNumberClick('.')} className="number" /> 
        <Button label="=" onClick={calculate} className="number" /> 
      </div>
    </div>
  );
};

export default Calculator;
