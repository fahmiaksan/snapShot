import React from 'react';
import Image from './Image';
import NoImages from './NoImages';

function Gallery(props) {
  const results = props.images;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <div className='d-flex flex-wrap justify-content-center align-items-center'>{images}</div>
      {noImages}
    </div>
  );
}

export default Gallery