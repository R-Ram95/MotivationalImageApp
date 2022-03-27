import './App.css';
import React, { useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageGenCard from './components/ImageGenCard';
import QuoteCard from './components/QuoteCard';

function App() {
  const [image, setImage] = useState('');
  const [quote, setQuote] = useState('');

  return (
    <>
      <div className='header'>
        <h1>Motivational Image Generator</h1>
      </div>
      <div className='container'>
        <div id='image'>
          <ImageCard {...{ image, setImage }} />
        </div>
        <div id='image-gen'>
          <ImageGenCard {...{ image, quote }} />
        </div>
        <div id='quote'>
          <QuoteCard {...{ quote, setQuote }} />
        </div>
      </div>
    </>
  );
}

export default App;
