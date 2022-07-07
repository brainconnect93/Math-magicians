import React, { useState } from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function

function Calculator() {
  const [state, setState] = useState(0);
  const handleClick = (event) => {
    setState((state) = calculate(state, event.target.textContent));
  };

    return (
      <>
        <section className="container">
          <div className="calc-box">
            <div className="screen"><span className="output">{next || total || 0}</span></div>
            <div className="buttons">
              <button type="button" className="calc" onClick={this.handleClick}>AC</button>
              <button type="button" className="calc" onClick={this.handleClick}>+/-</button>
              <button type="button" className="calc" onClick={this.handleClick}>%</button>
              <button type="button" className="calc active" onClick={this.handleClick}><span>&#247;</span></button>
              <button type="button" className="calc" onClick={this.handleClick}>7</button>
              <button type="button" className="calc" onClick={this.handleClick}>8</button>
              <button type="button" className="calc" onClick={this.handleClick}>9</button>
              <button type="button" className="calc active" onClick={this.handleClick}>x</button>
              <button type="button" className="calc" onClick={this.handleClick}>4</button>
              <button type="button" className="calc" onClick={this.handleClick}>5</button>
              <button type="button" className="calc" onClick={this.handleClick}>6</button>
              <button type="button" className="calc active" onClick={this.handleClick}>-</button>
              <button type="button" className="calc" onClick={this.handleClick}>1</button>
              <button type="button" className="calc" onClick={this.handleClick}>2</button>
              <button type="button" className="calc" onClick={this.handleClick}>3</button>
              <button type="button" className="calc active" onClick={this.handleClick}>+</button>
              <button type="button" className="zero" onClick={this.handleClick}>0</button>
              <button type="button" className="calc" onClick={this.handleClick}>.</button>
              <button type="button" className="calc active" onClick={this.handleClick}>=</button>
            </div>
          </div>
        </section>
      </>
    );
  }

export default Calculator;
