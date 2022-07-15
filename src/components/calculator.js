import React, { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState(0);

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (
    <section className="container">
      <h2 className="calc-title">Let&apos;s do some mathematics!</h2>
      <div className="calc-box">
        <div className="screen"><span className="output">{state.next || state.total || 0}</span></div>
        <div className="buttons">
          <button type="button" className="calc" onClick={handleClick}>AC</button>
          <button type="button" className="calc" onClick={handleClick}>+/-</button>
          <button type="button" className="calc" onClick={handleClick}>%</button>
          <button type="button" className="calc active" onClick={handleClick}><span>&#247;</span></button>
          <button type="button" className="calc" onClick={handleClick}>7</button>
          <button type="button" className="calc" onClick={handleClick}>8</button>
          <button type="button" className="calc" onClick={handleClick}>9</button>
          <button type="button" className="calc active" onClick={handleClick}>x</button>
          <button type="button" className="calc" onClick={handleClick}>4</button>
          <button type="button" className="calc" onClick={handleClick}>5</button>
          <button type="button" className="calc" onClick={handleClick}>6</button>
          <button type="button" className="calc active" onClick={handleClick}>-</button>
          <button type="button" className="calc" onClick={handleClick}>1</button>
          <button type="button" className="calc" onClick={handleClick}>2</button>
          <button type="button" className="calc" onClick={handleClick}>3</button>
          <button type="button" className="calc active" onClick={handleClick}>+</button>
          <button type="button" className="zero" onClick={handleClick}>0</button>
          <button type="button" className="calc" onClick={handleClick}>.</button>
          <button type="button" className="calc active" onClick={handleClick}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
