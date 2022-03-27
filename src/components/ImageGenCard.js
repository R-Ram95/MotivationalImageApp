import React from 'react';

const ImageGenCard = () => {
  // useEffect(() => {
  //   let image = new Image();
  //   image.src =
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png';
  //   draw(image);
  // }, []);

  // const draw = (image) => {
  //   let canvas = document.getElementById('canvas');
  //   if (canvas.getContext) {
  //     let ctx = canvas.getContext('2d');
  //     let ctxtext = canvas.getContext('2d');
  //     // ctx.fillStyle = 'rgb(200, 0, 0)';
  //     // ctx.fillRect(10, 10, 50, 50);

  //     // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  //     // ctx.fillRect(30, 30, 50, 50);

  //     ctx.drawImage(image, 0, 0);

  //     ctx.font = '48px serif';
  //     ctx.fillText('hello World', image.height / 2, image.width / 2);
  //     console.log(image.height);
  //   }
  // };

  return (
    <div className='card'>
      <h1>Image Generator</h1>
    </div>
  );
};

export default ImageGenCard;
