import React, { useState } from 'react';

const ImageCard = (props) => {
  const { image, setImage } = props;
  const [error, setError] = useState(false);

  const handleGetImage = () => {
    fetch('https://picsum.photos/400')
      .then((response) => {
        setImage(response.url);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className='card'>
      <h1>Step 1: Choose Your Picture</h1>
      {image && <img src={image}></img>}
      {error && <h2>Sorry, failed to get image :( </h2>}
      <button type='button' className='btn' onClick={handleGetImage}>
        Get Image
      </button>
    </div>
  );
};

export default ImageCard;
