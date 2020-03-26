import React from 'react';

const Card = ({ number, selected }) => (
  <div className={`card align-center ${selected && 'selected'}`}>
    {number !== undefined
      ? <span>{number}</span>
      : <span>...</span>
    }
  </div>
);

export default Card;
