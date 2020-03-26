import React from 'react';
import Carousel from './components/carousel';

import './App.css';

const getNumbers = [
  'http://www.mocky.io/v2/5e7ce8c03500001690069eeb?mocky-delay=1000ms',
  'http://www.mocky.io/v2/5e7ce90c3500001990069ef8?mocky-delay=1000ms',
  'http://www.mocky.io/v2/5e7ce9253500001690069ef9?mocky-delay=1000ms',
];

const totalItems = 15;

function App() {
  return (
    <div className='app align-center'>
      <h1>This is my lazy loading example.</h1>
      <span>This carousel has 15 items loaded from 5 to 5</span>
      <span>It only loads  next 5 elements when reaching the 4th previous</span>
      <br />
      <Carousel totalItems={totalItems} getNumbers={getNumbers} />
    </div>
  );
}

export default App;
