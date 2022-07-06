import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <section className="container">
          <div className="calc-box">
            <div className="screen"><span className="output">0</span></div>
            <div className="buttons">
              <button type="button" className="calc">AC</button>
              <button type="button" className="calc">+/-</button>
              <button type="button" className="calc">%</button>
              <button type="button" className="calc active"><span>&#247;</span></button>
              <button type="button" className="calc">7</button>
              <button type="button" className="calc">8</button>
              <button type="button" className="calc">9</button>
              <button type="button" className="calc active">x</button>
              <button type="button" className="calc">4</button>
              <button type="button" className="calc">5</button>
              <button type="button" className="calc">6</button>
              <button type="button" className="calc active">-</button>
              <button type="button" className="calc">1</button>
              <button type="button" className="calc">2</button>
              <button type="button" className="calc">3</button>
              <button type="button" className="calc active">+</button>
              <button type="button" className="zero">0</button>
              <button type="button" className="calc">.</button>
              <button type="button" className="calc active">=</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Calculator;
