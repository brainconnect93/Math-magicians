import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonContainer from './button';

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
          <ButtonContainer handleClick={handleClick} />
        </div>
      </section>
  );
};

export default Calculator;
