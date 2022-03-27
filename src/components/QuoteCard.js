import React, { useState } from 'react';

const QuoteCard = (props) => {
  const { quote, setQuote } = props;
  const [error, setError] = useState(false);

  const handleGetQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <div className='card'>
      <h1>Step 2: Choose Your Quote</h1>
      {quote && <p>{quote}</p>}
      {error && <h2>Sorry, failed to get quote :(</h2>}
      <button type='button' className='btn' onClick={handleGetQuote}>
        Get Quote
      </button>
    </div>
  );
};

export default QuoteCard;
