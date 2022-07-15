import React from 'react';
import PropTypes from prop-types;

const ButtonContainer = (props) => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  const { handleClick } = props;

  return (
    <div>
      <div className="buttons">
        {calc.map((button) => (
          <button type='button' key={button} onClick={handleClick}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

ButtonContainer.PropTypes = { handleClick: PropTypes.func.isRequired }

export default ButtonContainer;