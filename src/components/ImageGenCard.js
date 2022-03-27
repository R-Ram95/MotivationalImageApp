import React, { useEffect } from 'react';

const ImageGenCard = (props) => {
  const { image, quote } = props;
  let canvas;
  let ctx;

  // HARD CODED CANVAS VALUES CHANGE LATER
  const WIDTH = 400;
  const HEIGHT = 400;

  useEffect(() => {
    // setting up canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
  });

  const drawPicture = (image) => {
    let img = new Image();
    img.src = image;

    ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);
  };

  // draw each word till current width > maxMidth
  // move down to next line

  const drawQuote = (quote) => {
    // HARD CODED MAKE DYNAMIC LATER //
    let lineHeight = 30;
    let maxWidth = WIDTH - 10;
    let x = 10;
    let y = HEIGHT / 2;
    ctx.font = '24px serif';

    let words = quote.split(' ');
    let line = '';

    for (const word of words) {
      let testLine = line + word + ' ';

      let metric = ctx.measureText(testLine);
      let currentWidth = metric.width;

      // overflow, need to move down (y increases down)
      if (currentWidth > maxWidth) {
        ctx.fillText(line, x, y); // position of x does not change
        line = word + ' ';
        y += lineHeight;
      }
      // line does not overflow, keep adding words
      else {
        line = testLine;
      }
      ctx.fillText(line, x, y);
    }
  };

  const handleGenerateImage = () => {
    if (image && quote) {
      drawPicture(image);
      drawQuote(quote);
    } else {
      alert('Sorry, You must select an image and quote first :)');
    }
  };

  return (
    <div className='card'>
      <h1>Step 3: Generate Your Image</h1>
      <canvas id='canvas'></canvas>
      <button type='button' className='btn' onClick={handleGenerateImage}>
        Generate Image
      </button>
    </div>
  );
};

export default ImageGenCard;
