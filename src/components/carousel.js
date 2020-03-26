import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './card';

const Carousel = ({ totalItems, getNumbers }) => {
  const [curr, updateCurr] = useState(0);
  const [loadedNumbers, updateLoadedNumbers] = useState(new Array(totalItems).fill(undefined));

  useEffect(() => {
    if (curr + 3 < totalItems && loadedNumbers[curr + 2] === undefined) {
      doRequest(Math.floor((curr + 2) / 5));
    }
  }, [curr]);

  const doRequest = (which) => {
    axios.get(getNumbers[which]).then(({ data }) => {
      const newArray = [...loadedNumbers];
      newArray.splice(which * data.length, data.length, ...data)
      updateLoadedNumbers(newArray)
    });
  }

  return (
    <div className='carousel align-center'>
      {curr >= 1 && <button onClick={() => updateCurr(curr - 1)}>&lt;</button>}

      {loadedNumbers.map((item, index) => {
        if (
          (Math.abs(index - curr) <= 1) ||
          (curr === 0 && index <= 2) ||
          (curr >= totalItems - 2 && index >= totalItems - 3)
        ) {
          return <Card key={index} number={item && item.number} selected={index === curr} />;
        }

      })}

      {curr <= (totalItems - 2) && <button onClick={() => updateCurr(curr + 1)}>&gt;</button>}
    </div>
  );
}

export default Carousel;
